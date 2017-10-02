FROM node:8.5.0
EXPOSE 3000
RUN mkdir /app
WORKDIR /app
RUN cd /app
COPY . .
RUN npm install
CMD npm run dev