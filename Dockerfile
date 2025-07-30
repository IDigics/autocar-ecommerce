# Stage 1: Build
FROM node:20 AS builder

# Install essential build tools
RUN apt-get update && \
    apt-get install -y python3 make g++ && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# 1. Copy package files
COPY package*.json ./
#COPY .npmrc ./

# 2. Install dependencies (including devDependencies)
RUN npm install
RUN npm install --include=optional --verbose \
  && npm rebuild lightningcss --build-from-source --verbose

RUN  npm install lightningcss-linux-x64-gnu
# 3. Copy all other files
COPY . .

# 4. Force Webpack minifier (bypass lightningcss)
ENV NEXT_FORCE_CSS_MINIFIER=webpack

# 5. Build the app
RUN npm run build

# Stage 2: Production
FROM node:20-slim

WORKDIR /app

# 1. Copy built assets
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

# 2. Install only production dependencies
RUN npm install --production

# Environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

# Expose and run
EXPOSE 3000
CMD ["npm", "start"]