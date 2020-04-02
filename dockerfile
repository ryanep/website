FROM nginx:alpine
COPY public /usr/share/nginx/html
COPY config/nginx/nginx.conf /etc/nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
