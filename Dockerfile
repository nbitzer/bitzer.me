# nginx state for serving content
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/configfile.template
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets over
COPY . .

ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080

# Pass the 8080 port variable into the config file and start nginx
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"