FROM node:14 AS client

WORKDIR /usr/src/app

COPY client/package*.json .
RUN npm install

COPY /client/ ./
RUN npm run build

FROM node:14 AS server

WORKDIR /roor/server/

COPY --from=client /usr/src/app/dist ../client/dist

COPY server/package*.json .
RUN npm install

COPY /server/ ./
EXPOSE 3000 8080

CMD ["npm", "start"]
