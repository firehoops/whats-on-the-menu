FROM node:14 AS client

WORKDIR /usr/src/app

COPY client/package*.json .
RUN npm install

COPY /client/ ./
# Builds files in server/
RUN npm run build

FROM node:14 AS server

WORKDIR /app/

COPY --from=client /usr/src/server/public ./public

COPY server/package*.json .
RUN npm install

COPY /server/ .

ENV PORT=8080
ENV RUN_ENV="prod"

EXPOSE 8080

CMD ["node", "index.js"]
