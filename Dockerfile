FROM node:14 AS client

WORKDIR /usr/src/app

COPY client/package*.json .
RUN npm install

COPY /client/ ./

# Builds files in server/
RUN npm run build

FROM node:14 AS server

WORKDIR /app/

COPY package*.json .
RUN npm install

COPY . .
EXPOSE 3000 8080

CMD ["npm", "start"]
