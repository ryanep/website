FROM node:alpine3.21 AS builder

WORKDIR /app

ARG CONTENTFUL_GRAPHQL_ENDPOINT

COPY . .

RUN npm install
RUN npm run codegen
RUN npm run build

FROM nginx:1.27.4-alpine-slim

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
