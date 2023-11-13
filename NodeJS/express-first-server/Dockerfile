FROM node:18
RUN apt-get update && apt-get install -y iputils-ping

WORKDIR /code

COPY ./ ./

RUN npm install 

EXPOSE 8081
CMD ["node", "app.js"]

