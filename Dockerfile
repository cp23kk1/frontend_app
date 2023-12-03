FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json ./
RUN  npm install --production

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG APP_VERSION
ARG ENV
ENV APP_VERSION=${APP_VERSION}
ENV ENVIRONMENT=${ENV}

ENV NEXT_TELEMETRY_DISABLED 1
RUN yarn add --exact --cwd /app --dev @types/node
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app



ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 80

ENV PORT 80

CMD ["npm", "start"]
