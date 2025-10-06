import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import CoffeeSleeveIntegration from "@/pages/coffee-sleeve-integration";
import PeelAndStickVersion from "@/pages/peel-and-stick-version";
import LidAttachedTamperProof from "@/pages/lid-attached-tamper-proof";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/coffee-sleeve-integration" component={CoffeeSleeveIntegration}/>
      <Route path="/peel-and-stick-version" component={PeelAndStickVersion}/>
      <Route path="/lid-attached-tamper-proof" component={LidAttachedTamperProof}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
