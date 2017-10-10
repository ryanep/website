FROM node:8.5.0
EXPOSE 3000
RUN mkdir /app
WORKDIR /app
RUN cd /app
COPY package.json /app
COPY dist/ /app/
RUN yarn --production
CMD ["node", "./server/"]