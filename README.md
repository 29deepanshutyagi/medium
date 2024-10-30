# Medium Project

This project is a full-stack application built with Cloudflare Workers, Prisma, and Vite. It includes a backend API, a common library, and a frontend application.

## Table of Contents

- [Overview](#overview)
- [Backend](#backend)
  - [Setup](#setup)
  - [Development](#development)
  - [Deployment](#deployment)
- [Common](#common)
- [Frontend](#frontend)
  - [Setup](#setup-1)
  - [Development](#development-1)
  - [Building](#building)
- [Technologies](#technologies)
- [License](#license)

## Overview

This project demonstrates the use of Cloudflare Workers for serverless functions, Prisma for database management, and Vite for a fast frontend development experience. The backend is built with Hono, a small and fast web framework for Cloudflare Workers, and the frontend is built with React and TypeScript.

## Backend

The backend is a serverless API running on Cloudflare Workers, using Prisma for database access.

### Setup

1. Install dependencies:
    ```sh
    npm install
    ```

2. Set up the environment variables:
    - Create a `.env` file in the `backend` directory with the following content:
      ```env
      DATABASE_URL="your-database-url"
      JWT_SECRET="your-jwt-secret"
      ```

3. Apply Prisma migrations:
    ```sh
    npx prisma migrate deploy
    ```

### Development

To start the development server, run:
```sh
npm run dev

Deployment
To deploy the backend to Cloudflare Workers, run:
npm run deploy
Common
The common directory contains shared code and utilities used by both the backend and frontend.

Setup
Install dependencies
npm install

Frontend
The frontend is a React application built with Vite.

Setup
Install dependencies:
npm install

Development
To start the development server, run:

npm run dev

Building
To build the frontend for production, run:
npm run build

Technologies
Cloudflare Workers: Serverless functions for the backend.
Prisma: ORM for database management.
Vite: Fast frontend build tool.
React: JavaScript library for building user interfaces.
TypeScript: Typed superset of JavaScript.


License
This project is licensed under the MIT License.
Feel free to customize this README further based on your specific project details and requirements.
