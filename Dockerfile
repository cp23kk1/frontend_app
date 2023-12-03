FROM node:18-alpine AS builder

WORKDIR /temp

RUN npm config set strict-ssl false
RUN npm config set registry http://registry.npmjs.org/
ARG APP_VERSION
ARG ENV
ENV APP_VERSION=${APP_VERSION}
ENV ENVIRONMENT=${ENV}
COPY . .

RUN npm install
RUN yarn add --exact --cwd /app --dev @types/node
RUN npm run build

#########=========> 

FROM node:18-alpine AS server

WORKDIR /app
ENV APP_VERSION=${APP_VERSION}
ENV ENVIRONMENT=${ENV}
# We only require these 5 folders/files for nextjs apps in production
COPY --from=builder /temp/next.config.js ./
COPY --from=builder /temp/public ./public
COPY --from=builder /temp/build ./build
COPY --from=builder /temp/node_modules ./node_modules
COPY --from=builder /temp/package.json ./package.json
ENV PORT 80
EXPOSE 80
CMD [ "npm", "run", "start" ]