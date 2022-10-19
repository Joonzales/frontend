FROM node:alpine as build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app/
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/nginx.conf
VOLUME ["/var/cache/client_temp","/var/cache/proxy_temp"]
RUN chmod 777 -R /var/cache/nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
