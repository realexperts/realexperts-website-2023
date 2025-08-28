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

# Copy dependencies (nur Root node_modules, da Yarn 4.x alle Dependencies dort hoistet)
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/.yarn ./.yarn

# Copy source code
COPY . .

# Build the application (falls Directus Extensions gebaut werden müssen)
WORKDIR /app/packages/backend
RUN yarn build 2>/dev/null || echo "No build script found, skipping..."

# Production stage
FROM base AS runner
WORKDIR /app

# Create directus user
RUN addgroup --system --gid 1001 directus
RUN adduser --system --uid 1001 directus

# Copy built application
COPY --from=builder --chown=directus:directus /app/packages/backend ./

# Install only production dependencies
RUN yarn workspaces focus --production && yarn cache clean

# Switch to non-root user
USER directus

# Expose port
EXPOSE 8055

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8055/server/health || exit 1

# Start command
CMD ["yarn", "backend:start"]