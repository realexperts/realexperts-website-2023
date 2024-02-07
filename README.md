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

1. **Install Dependencies:**
   ```bash
   npm install
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
  npm export:models
  ```

## Start Development

- To start the development server, use:
  ```bash
  npm dev
  ```

## Database Operations

- To pull the database, use the provided Makefile command:
  ```bash
  make pull
  ```

---

By following these instructions, you should be able to set up and start developing the project on your local machine. For any additional information or troubleshooting, refer to the respective package documentation or the project's FAQ section.
