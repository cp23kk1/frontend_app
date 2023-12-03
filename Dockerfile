FROM node:14-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine


ARG APP_VERSION
ARG ENV
ENV APP_VERSION=${APP_VERSION}
ENV ENVIRONMENT=${ENV}

COPY --from=builder /app/.next /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
