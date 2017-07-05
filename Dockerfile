FROM node:8.1.3
MAINTAINER Ryan Elliott-Potter <ryan@ryanep.com>
EXPOSE 3000
RUN mkdir /app
WORKDIR /app
RUN cd /app
COPY . .
RUN npm install
CMD npm run dev