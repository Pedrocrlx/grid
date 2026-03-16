# Gemini Project Overview: Grid

This document provides a comprehensive overview of the Grid project, a multi-tenant SaaS platform for barbershops. It is intended to be used as a context for an AI assistant to understand the project and provide assistance.

## Project Overview

Grid is a multi-tenant SaaS platform designed for barbershops, enabling them to create professional booking websites with organized scheduling. The platform brings structure and precision to appointment management, featuring smart calendar organization, international booking support, and a clean booking experience for customers.

The application is a Next.js project built with TypeScript, using Prisma as the ORM for a PostgreSQL database. It utilizes Bun as the runtime and package manager. The frontend is built with React and Tailwind CSS, with UI components from Shadcn UI.

## Building and Running

The following commands are used to build, run, and test the project:

-   **Install Dependencies:** `bun install`
-   **Run Development Server:** `bun run dev`
-   **Run Production Build:** `bun run build`
-   **Start Production Server:** `bun run start`
-   **Run Tests:** `bun test`
-   **Lint Code:** `bun run lint`

## Development Conventions

The project follows a set of coding guidelines to ensure consistency and maintainability. Key principles include:

-   **KISS (Keep It Simple, Stupid):** Prioritize simple, readable solutions.
-   **Strict Typing:** Use TypeScript effectively and avoid the `any` type.
-   **Service Pattern:** Encapsulate all API communication within the `src/services` directory.

For a complete overview, please refer to the [Coding Guidelines](docs/CODING_GUIDELINE.md).

## Project Structure

The codebase is organized to maintain a clean and scalable architecture:

-   `src/app/`: Contains the core application logic, following the Next.js App Router convention.
    -   `api/`: API route handlers.
    -   `[slug]/`: Dynamic pages for each tenant (barbershop).
    -   `_actions/`: Server-side actions for creating and managing bookings.
-   `src/components/`: Shared React components, including UI primitives from Shadcn.
-   `src/services/`: Houses API service modules (e.g., Axios wrappers) for interacting with the backend.
-   `src/lib/`: Utility functions and library initializations (e.g., `prisma.ts`).
-   `prisma/`: Contains the Prisma schema (`schema.prisma`), migrations, and seed scripts.
-   `docs/`: Project documentation, including coding guidelines and specifications.

## Database Schema

The database schema is defined in `prisma/schema.prisma`. It includes the following models:

-   `User`: Represents a user of the platform.
-   `Subscription`: Represents a user's subscription plan.
-   `BarberShop`: Represents a barbershop tenant.
-   `Barber`: Represents a barber within a barbershop.
-   `Booking`: Represents a booking for a service.
-   `Service`: Represents a service offered by a barbershop.

## Key Files

-   **`README.md`**: The main README file for the project.
-   **`package.json`**: Defines the project's dependencies and scripts.
-   **`next.config.ts`**: The configuration file for Next.js.
-   **`prisma/schema.prisma`**: The database schema.
-   **`src/app/_actions/create-booking.ts`**: The server-side logic for creating a booking.
-   **`src/app/[slug]/page.tsx`**: The main page for a barbershop.
-   **`src/app/[slug]/_components/BookingSheet.tsx`**: The UI component for the booking process.
