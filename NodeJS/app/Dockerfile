FROM node:18
RUN apt-get update && apt-get install -y iputils-ping

WORKDIR /code

COPY package.json /code
COPY server.js /code

RUN npm install 

EXPOSE 8080
CMD ["node", "server.js"]

