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
   npm ci
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

## Sync Database from Server to Local

Make sure, your public key is added to the `~/.ssh/authorized_keys` file on the server.

- To pull the database, use the provided Makefile command:
  ```bash
  make pull
  ```

## Start Development

- To start the development server, use:
  ```bash
  npm run dev
  ```

# Additional commands

## Manually Export TypeScript Models for Frontend

- Run the following command to export TypeScript models for the frontend:
  ```bash
  npm backend:extension:models:export
  ```

---

By following these instructions, you should be able to set up and start developing the project on your local machine. For any additional information or troubleshooting, refer to the respective package documentation or the project's FAQ section.
