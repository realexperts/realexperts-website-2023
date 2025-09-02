# Build arguments
ARG NODE_VERSION=22.18.0

# Node.js Base Image
FROM node:${NODE_VERSION}-alpine AS base

# Enable Corepack for Yarn management
RUN corepack enable && corepack prepare yarn@4.9.2 --activate

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy root package files for workspace resolution
COPY package.json yarn.lock* ./
COPY .yarnrc.yml* ./
COPY .yarn/releases/yarn-4.9.2.cjs ./.yarn/releases/

# Copy all package.json files for workspace dependencies
COPY packages/backend/package.json ./packages/backend/
COPY packages/frontend/package.json ./packages/frontend/

# Install dependencies
RUN yarn install --immutable

# Build stage
FROM base AS builder
WORKDIR /app

# Copy dependencies and yarn configuration
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/.yarn ./.yarn

# Copy source code
COPY . .

# Build the application if build script exists
WORKDIR /app/packages/backend
RUN yarn build 2>/dev/null || echo "No build script found, skipping..."

# Production stage
FROM base AS runner
WORKDIR /app

# Create directus user
RUN addgroup --system --gid 1001 directus
RUN adduser --system --uid 1001 directus

# Copy the entire built application with proper structure
COPY --from=builder --chown=directus:directus /app ./

# Install only production dependencies for the backend workspace
RUN yarn workspaces focus @realexperts/backend --production && yarn cache clean

# Switch to non-root user
USER directus

# Expose port
EXPOSE 8055

# Run bootstrap script if it exists
RUN yarn backend:bootstrap

# Start command - Use the script from root package.json
CMD ["yarn", "backend:start"]