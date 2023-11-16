# Project Setup Documentation

This document provides a comprehensive guide for setting up the project environment. It includes requirements, hosting details, and step-by-step instructions for local installation and development.

## Requirements

Before you begin, ensure you have the following tools installed:

- **PNPM:** A super-fast package manager. [Install PNPM](https://pnpm.io/installation)
- **Docker & Docker-Compose:** Essential for containerization. [Install Docker](https://docs.docker.com/engine/install/)
- **Node.js:** JavaScript runtime built on Chrome's V8 JavaScript engine. [Download Node.js](https://nodejs.org/en/download/)
- **npm:** A package manager for JavaScript. [Get npm](https://www.npmjs.com/get-npm)

## Hosting

- **Frontend:** Hosted on Vercel.
- **Backend:** Hosted on a server with Dokku.

## Why Use PNPM?

- PNPM is a fast, disk space efficient package manager. It uses hard links and symlinks to save one version of a module only ever once on a disk. When using npm or Yarn for example, if you have 100 packages using lodash, you will have 100 copies of lodash on disk. With PNPM, lodash will be saved in a single place on the disk and a hard link will put it into the \`node_modules\` where it should be installed.

## Local Installation

Follow these steps to set up the project locally:

1. **Install Dependencies:**
   ```bash
   pnpm install
   ```

2. **Environment Setup:**
   Copy the \`.env.example\` file to \`.env\` in the respective directories:
   ```bash
   cp .env.example .env
   cp packages/backend/.env.example packages/backend/.env
   cp packages/frontend/.env.example packages/frontend/.env
   ```

## Export TypeScript Models for Frontend

- Run the following command to export TypeScript models for the frontend:
  ```bash
  pnpm -C packages/backend exec directus models snapshot ../frontend/src/lib/types.ts
  ```

  or
  
  ```bash
  pnpm export:models
  ```

## Start Development

- To start the development server, use:
  ```bash
  pnpm dev
  ```

## Database Operations

- To pull the database, use the provided Makefile command:
  ```bash
  make pull
  ```

---

By following these instructions, you should be able to set up and start developing the project on your local machine. For any additional information or troubleshooting, refer to the respective package documentation or the project's FAQ section.
