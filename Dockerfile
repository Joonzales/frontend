FROM node:alpine as build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app/
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
RUN chmod 777 /etc/nginx/conf.d/
RUN mkdir -p /var/cache/nginx/client_temp
RUN chmod 777 /var/cache/nginx/client_temp
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
