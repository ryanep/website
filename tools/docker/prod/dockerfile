FROM node:9.0.0-alpine
EXPOSE 3000

RUN mkdir /app
WORKDIR /app
RUN cd /app

COPY ./package.json /app
COPY ./dist/server/index.js /app
COPY ./dist/server/views/index.ejs /app/views/

RUN yarn --production
CMD ["node", "./"]
