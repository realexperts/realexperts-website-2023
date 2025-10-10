# Project Setup Documentation

This document provides a comprehensive guide for setting up the project environment. It includes requirements, hosting details, and step-by-step instructions for local installation and development.

## Requirements

Before you begin, ensure you have the following tools installed:

- **Docker & Docker-Compose:** Essential for containerization. [Install Docker](https://docs.docker.com/engine/install/)
- **Node.js:** JavaScript runtime built on Chrome's V8 JavaScript engine. [Download Node.js](https://nodejs.org/en/download/)
- **npm:** A package manager for JavaScript. [Get npm](https://www.npmjs.com/get-npm)

## Hosting

- **Frontend:** Hosted on Vercel.
- **Backend:** Hosted on a server with Dokku.

## Local Installation

Follow these steps to set up the project locally:

1. **Install Node Packages:**
   ```bash
   yarn
   ```

2. **Environment Setup:**
   Copy environment files and update the values as required.
   ```bash
   cp .env.example .env
   cp packages/backend/.env.example packages/backend/.env
   cp packages/frontend/.env.example packages/frontend/.env
   ```

3. **Add Hosts:**
   Add the following hosts to your `/etc/hosts` file:
   ```bash
   127.0.0.1       x.realexperts.localhost realexperts.localhost
    ```

## Start the docker containers

  ```bash
  make
  ```

## Available Sites/Projects

This project manages **3 different sites**:

1. **`re-backend`** (RealExperts Backend)
2. **`hg-backend`** (HG Backend) 
3. **`beijing-driver`** (Beijing Driver)

## Sync Database from Server to Local

Make sure, your public key is added to the `~/.ssh/authorized_keys` file on the server.

### Pull Production Data for Specific Sites

You can pull production data for each site individually:

#### Using Yarn Commands:
```bash
# RealExperts Backend
yarn pull:re

# HG Backend  
yarn pull:hg

# Beijing Driver
yarn pull:beijing-driver
```

#### Using Make Commands:
```bash
# RealExperts Backend
make re-pull

# HG Backend
make hg-pull

# Beijing Driver (use yarn command above)
```

### What happens during a pull:
Each pull command performs the following steps:
1. **Database Dump**: Creates a PostgreSQL dump from production
2. **Download**: Downloads the dump locally to `./dumps/production/{SITE}/`
3. **Database Reset**: Empties the local database
4. **Import**: Restores the production dump to local DB
5. **Migrations**: Runs `yarn bootstrap`
6. **Schema Sync**: Runs `yarn import` and `yarn export`
7. **File Sync**: Synchronizes upload files via rsync

## Start Development

- To start the development server, use:
  ```bash
yarn dev
  ```

# Additional commands

## Release to Production

Deploy the current main branch to all production sites:

```bash
yarn release
```

**What happens during release:**
This command pushes the current `main` branch to all 3 remote repositories:
- `re-backend` remote
- `hg-backend` remote  
- `beijing-driver` remote

## Development Commands

```bash
# Start development server
yarn dev

# Start specific services
yarn frontend:dev
yarn backend:start

# Build frontend
yarn frontend:build
```

## Code Quality

```bash
# Linting
yarn lint
yarn lint:fix

# Type checking
yarn check-types
```

## Database Management

```bash
# Export TypeScript models for frontend
yarn export

# Import database schema
yarn import

# Bootstrap database
yarn bootstrap
```

## Docker Commands

```bash
# Start all containers
make

# Restart specific container
make restart [service-name]

# Stop all containers
make down

# Execute command in container
make exec [service-name] "[command]"
```

## Manually Export TypeScript Models for Frontend

- Run the following command to export TypeScript models for the frontend:
  ```bash
 yarn export
  ```

---

By following these instructions, you should be able to set up and start developing the project on your local machine. For any additional information or troubleshooting, refer to the respective package documentation or the project's FAQ section.

-
