import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import fs from "fs";
import path from "path";

// Helper function for logging (replicated to avoid importing from vite.ts in production)
function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}

// Serve static files in production (replicated to avoid importing from vite.ts which requires vite package)
function serveStatic(app: express.Express) {
  const distPath = path.resolve(import.meta.dirname, "public");

  if (!fs.existsSync(distPath)) {
    console.warn(
      `Warning: Build directory not found at ${distPath}. Serving fallback response.`
    );
    app.use("*", (_req, res) => {
      res.status(503).json({ 
        error: "Service Unavailable", 
        message: "The application build is not available. Please run 'npm run build' first." 
      });
    });
    return;
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  try {
    console.log("Starting server initialization...");
    console.log("Environment:", process.env.NODE_ENV || "production");
    
    const server = await registerRoutes(app);
    console.log("Routes registered successfully");

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";

      console.error("Error handled:", err);
      res.status(status).json({ message });
    });

    // importantly only setup vite in development and after
    // setting up all the other routes so the catch-all route
    // doesn't interfere with the other routes
    if (app.get("env") === "development") {
      console.log("Setting up Vite in development mode");
      // Dynamically import vite and its plugins to avoid bundling them
      const { createServer: createViteServer } = await import("vite");
      const reactPlugin = await import("@vitejs/plugin-react");
      const runtimeErrorOverlay = await import("@replit/vite-plugin-runtime-error-modal");
      const { nanoid } = await import("nanoid");
      
      // Build vite config inline to avoid importing vite.config.ts (which imports vite)
      const plugins = [
        reactPlugin.default(),
        runtimeErrorOverlay.default(),
      ];
      
      if (process.env.REPL_ID !== undefined) {
        const cartographer = await import("@replit/vite-plugin-cartographer");
        plugins.push(cartographer.cartographer());
      }
      
      const vite = await createViteServer({
        plugins,
        resolve: {
          alias: {
            "@": path.resolve(import.meta.dirname, "..", "client", "src"),
            "@shared": path.resolve(import.meta.dirname, "..", "shared"),
            "@assets": path.resolve(import.meta.dirname, "..", "attached_assets"),
          },
        },
        root: path.resolve(import.meta.dirname, "..", "client"),
        build: {
          outDir: path.resolve(import.meta.dirname, "..", "dist/public"),
          emptyOutDir: true,
        },
        configFile: false,
        server: {
          middlewareMode: true,
          hmr: { server },
          allowedHosts: true as const,
          fs: {
            strict: true,
            deny: ["**/.*"],
          },
        },
        appType: "custom",
      });

      app.use(vite.middlewares);
      app.use("*", async (req, res, next) => {
        const url = req.originalUrl;
        try {
          const clientTemplate = path.resolve(
            import.meta.dirname,
            "..",
            "client",
            "index.html",
          );
          let template = await fs.promises.readFile(clientTemplate, "utf-8");
          template = template.replace(
            `src="/src/main.tsx"`,
            `src="/src/main.tsx?v=${nanoid()}"`,
          );
          const page = await vite.transformIndexHtml(url, template);
          res.status(200).set({ "Content-Type": "text/html" }).end(page);
        } catch (e) {
          vite.ssrFixStacktrace(e as Error);
          next(e);
        }
      });
    } else {
      console.log("Serving static files in production mode");
      serveStatic(app);
    }

    // ALWAYS serve the app on the port specified in the environment variable PORT
    // Other ports are firewalled. Default to 5000 if not specified.
    // this serves both the API and the client.
    // It is the only port that is not firewalled.
    const port = parseInt(process.env.PORT || '5000', 10);
    console.log(`Attempting to listen on port ${port}...`);
    
    server.listen({
      port,
      host: "0.0.0.0",
      reusePort: true,
    }, () => {
      console.log(`Server successfully started on port ${port}`);
      log(`serving on port ${port}`);
    });

    server.on('error', (error: any) => {
      console.error("Server error:", error);
      if (error.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use`);
      }
    });
  } catch (error) {
    console.error("Fatal error during server initialization:");
    console.error(error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    process.exit(1);
  }
})();
