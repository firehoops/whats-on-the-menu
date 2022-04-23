build:			## Builds the Docker images
	docker-compose build

up:   		## Start the development environment
	docker-compose up -d --build

up-api:	build	## start api only (if using non-local DB)
	docker-compose up -d exception-api

down:			## Shutdown the dev env and remove it
	docker-compose down -v --remove-orphans
