FROM node:18
RUN apt-get update && apt-get install -y iputils-ping
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY server.js /usr/src/app
RUN npm install 

EXPOSE 8080
CMD ["node", "server.js"]

