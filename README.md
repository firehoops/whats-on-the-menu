# whats-on-the-menu
Allows home cooks to have a list of favorite dishes or recipes ready for your family or friends to pick out what they want. This can be used to help prepare for grocery shopping for the week to cut down on waste or to have a meal voted on for what to cook!

Project deployed on google cloud run https://menu-dntpdkhpxq-uc.a.run.app/

## Project setup
note: Docker must be installed and running for the containers to run
```
make build
```

## Start Client & Back-end
```
make up
```

## Stop servers
```
make down
```

## Testing each service w/ hot-reload
```
cd client
npm start

cd server
npm start
```
