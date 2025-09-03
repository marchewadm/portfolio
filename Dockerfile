ARG NODE_VERSION=22.19.0

# Build stage
FROM node:${NODE_VERSION}-slim AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . ./

RUN npm run build

# Stage for prod image
FROM node:${NODE_VERSION}-slim

WORKDIR /app

COPY --from=build /app/.output/ ./

ENV PORT=80
ENV HOST=0.0.0.0

EXPOSE 80

CMD ["node", "/app/server/index.mjs"]