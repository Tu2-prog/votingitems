FROM node:21-alpine3.17 AS serve

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8080

ARG MONGO_URL
ENV MONGO_URL=${MONGO_URL}

CMD [ "npm", "start" ]
