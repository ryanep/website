# Colours
COLOUR_YELLOW = "\033[1;33m"
COLOUR_RED = "\033[1;31m"
COLOUR_GREEN = "\033[0;32m"
COLOUR_END = "\033[0m"

# Tasks
TASK_STARTED = @echo ${COLOUR_YELLOW} - Task started: $@ ${COLOUR_END}
TASK_DONE = @echo ${COLOUR_GREEN} âœ“ Task succeeded: $@ ${COLOUR_END}
TASK_FAILED = @echo ${COLOUR_RED} âœ˜ Task failed: $@ ${COLOUR_END}

COMMIT = latest

APP_NAME = ryanep-frontend
DOCKER_IMAGE = dokku/${APP_NAME}

.PHONY: build

help: #// help: lists all tasks
	@echo "usage: make [target] ..."
	@echo ""
	@echo "available targets:"
	@grep -Eh '^.+:\ #//\ .+' ${MAKEFILE_LIST} | cut -d ' ' -f '3-' | column -t -s ':'
build: #// build: build website
	${TASK_STARTED}
	npm run build
	${TASK_DONE}
build-docker: #// build-docker: build docker image
	${TASK_STARTED}
	docker build -t ${DOCKER_IMAGE}:${COMMIT} . -f ./tools/docker/prod/dockerfile
	${TASK_DONE}
deploy-static: #// deploy-static: deploy static files
	${TASK_STARTED}
	echo s3://${CDN_RYANEP}
	aws s3 cp --recursive ./dist/client/ s3://${CDN_RYANEP} --acl public-read
	${TASK_DONE}
deploy: #// deploy: deploy app
	${TASK_STARTED}
	docker save ${DOCKER_IMAGE}:${COMMIT} -o image.tar && gzip image.tar
	scp -o StrictHostKeyChecking=no ./image.tar.gz ${SERVER_USER}@${SERVER_IP}:~/
	ssh -o StrictHostKeyChecking=no ${SERVER_USER}@${SERVER_IP} "gunzip ~/image.tar.gz && docker load -i ~/image.tar"
	ssh -o StrictHostKeyChecking=no ${SERVER_USER}@${SERVER_IP} "dokku tags:create ${APP_NAME} previous; dokku tags:deploy ${APP_NAME} ${COMMIT} && dokku tags:create ${APP_NAME} latest && dokku cleanup && rm ~/image.tar && docker image prune -a -f --filter "label=${APP_NAME}""
	${TASK_DONE}
release: clean build build-docker deploy-static deploy #// release: release app
clean:
	${TASK_STARTED}
	-rm -rf ./dist
	-rm image.tar.gz
	${TASK_DONE}
lint: #// lint: lint code
	${TASK_STARTED}
	npm run lint
	${TASK_DONE}
test: #// test: test code
	${TASK_STARTED}
	npm test
	${TASK_DONE}
