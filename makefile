clean:
	rm -rf ./.next && \
	rm -rf ./out && \
	rm -rf ./dist

app-build:
	npm run favicons && \
	npm run build

container-build:
	docker build -t ryanep/website:1.0.11 --progress=plain . \
	--build-arg CONTENTFUL_GRAPHQL_ENDPOINT=${CONTENTFUL_GRAPHQL_ENDPOINT}