# Coffee Packaging Technology Platform

## Overview

This is a modern full-stack web application showcasing Ranclo LLC's patented coffee packaging technology with integrated breath-freshening capabilities. The platform serves as a marketing and lead generation site for licensing opportunities, featuring detailed patent information, technology descriptions, and business contact forms. Built with React/TypeScript frontend, Express.js backend, and designed for both manufacturers and retailers in the coffee industry.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and modern component development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library with Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming and brand colors
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Form Handling**: React Hook Form with Zod validation for robust form management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript for API endpoints and server logic
- **Storage**: Memory-based storage implementation with interface pattern for easy database migration
- **Validation**: Zod schemas shared between frontend and backend for consistent data validation
- **API Design**: RESTful endpoints for contact form submissions and data retrieval
- **Development**: Hot reload with Vite integration for seamless full-stack development

### Data Storage Solutions
- **Current**: In-memory storage using Maps for development and prototyping
- **Prepared for**: PostgreSQL with Drizzle ORM configuration ready for production deployment
- **Database Schema**: Defined contact and user tables with proper relationships and constraints
- **Migration Ready**: Drizzle configuration set up for easy database schema migrations

### Authentication and Authorization
- **Current State**: Basic user schema defined but authentication not yet implemented
- **Prepared Structure**: User management system with username/password schema ready for implementation
- **Session Handling**: Connect-pg-simple package included for PostgreSQL session storage when needed

### External Dependencies
- **Database**: Neon serverless PostgreSQL configured for production deployment
- **UI Framework**: Extensive Radix UI component library for accessibility and functionality
- **Development Tools**: Replit-specific plugins for development environment integration
- **Font Loading**: Google Fonts integration for typography (Inter, DM Sans, Fira Code, etc.)
- **Icons**: Lucide React for consistent iconography throughout the application
- **Image Hosting**: Unsplash integration for high-quality stock photography in marketing sections