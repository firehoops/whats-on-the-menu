FROM node:14 AS client

WORKDIR /usr/src/app

COPY client/package*.json .
RUN npm install

COPY /client/ ./
# Builds files in server/
RUN npm run build

FROM node:14 AS server

WORKDIR /usr/src/app/server

COPY server/package*.json .
RUN npm install

COPY /server/ .

ENV PORT=8080
EXPOSE 8080

CMD ["node", "index.js"]
