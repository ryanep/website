COLOUR_YELLOW = "\033[1;33m"
COLOUR_RED = "\033[1;31m"
COLOUR_GREEN = "\033[0;32m"
COLOUR_END = "\033[0m"

TASK_STARTED = @echo ${COLOUR_YELLOW} - Task started: $@ ${COLOUR_END}
TASK_DONE = @echo ${COLOUR_GREEN} âœ“ Task succeeded: $@ ${COLOUR_END}
TASK_FAILED = @echo ${COLOUR_RED} âœ˜ Task failed: $@ ${COLOUR_END}

PROJECT_NAME = ryanep-website
DOCKER_IMAGE_NAME = dokku/${PROJECT_NAME}
DOCKER_TAG = latest

.PHONY: build-website deploy-website release

build-website:
	rm -rf ./public ./.cache && \
	yarn && \
	yarn build && \
	docker build -t ${DOCKER_IMAGE_NAME}:${DOCKER_TAG} . && \
	docker save ${DOCKER_IMAGE_NAME}:${DOCKER_TAG} -o ./${PROJECT_NAME}.tar && \
	gzip -f ./${PROJECT_NAME}.tar
deploy-website:
	${TASK_STARTED}
	scp -o StrictHostKeyChecking=no ./${PROJECT_NAME}.tar.gz ${DO_USER}@${DO_IP}:~/ && \
	ssh -o StrictHostKeyChecking=no ${DO_USER}@${DO_IP} " \
		gunzip -f ~/${PROJECT_NAME}.tar.gz && \
		docker load -i ~/${PROJECT_NAME}.tar && \
		rm -f ${PROJECT_NAME}.tar \
	"
	ssh -o StrictHostKeyChecking=no ${DO_USER}@${DO_IP} " \
		dokku tags:deploy ${PROJECT_NAME} latest && \
		dokku cleanup ${PROJECT_NAME} && rm -f ~/${PROJECT_NAME}.tar && \
		docker image prune -a -f --filter "label=${PROJECT_NAME}" && \
		docker system prune -f --volumes \
	"
	${TASK_DONE}

release: build-website deploy-website