FROM ubuntu:latest

RUN apt-get update && apt-get install -y -q nginx vim --no-install-recommends

COPY . /var/www/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]