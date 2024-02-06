FROM node:20-alpine AS deps
WORKDIR /app

COPY package.json ./
RUN  npm install --production

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG APP_VERSION
ARG ENV
ENV APP_VERSION=${APP_VERSION}
ENV ENVIRONMENT=${ENV}

ENV NEXT_TELEMETRY_DISABLED 1
RUN yarn install
RUN yarn build

FROM node:20-alpine AS runner
WORKDIR /app

ARG APP_VERSION
ARG ENV
ENV APP_VERSION=${APP_VERSION}
ENV ENVIRONMENT=${ENV}
ENV NODE_ENV=production


RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/.env ./.env
COPY --from=builder /app/next.config.js .
COPY --from=builder /app/appinfo.js .

USER nextjs

EXPOSE 80

ENV PORT 80

CMD ["npm", "start"]