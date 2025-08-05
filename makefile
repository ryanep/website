app-build:
	npm run favicons && \
	npm run build

container-build:
	docker build -t ryanep/website:1.0.3 --progress=plain . \
	--build-arg CONTENTFUL_GRAPHQL_ENDPOINT=${CONTENTFUL_GRAPHQL_ENDPOINT}

infrastructure-init:
	cd .infrastructure && \
	terraform init \
		-backend-config="bucket=${TF_BACKEND_BUCKET}" \
		-backend-config="key=${TF_BACKEND_KEY}" \
		-backend-config="region=${TF_BACKEND_REGION}" \
		-backend-config="access_key=${TF_BACKEND_ACCESS_KEY}" \
		-backend-config="secret_key=${TF_BACKEND_SECRET_KEY}"

infrastructure-plan:
	cd .infrastructure && \
	terraform plan \
	--var "aws_access_key=${AWS_ACCESS_KEY_ID}" \
	--var "aws_secret_key=${AWS_SECRET_ACCESS_KEY}" \
	--var "cloudflare_zone_id=${CLOUDFLARE_ZONE_ID}" \
	--var "cloudflare_api_token=${CLOUDFLARE_API_TOKEN}"

infrastructure-apply:
	cd .infrastructure && \
	terraform apply \
	--var "aws_access_key=${AWS_ACCESS_KEY_ID}" \
	--var "aws_secret_key=${AWS_SECRET_ACCESS_KEY}" \
	--var "cloudflare_zone_id=${CLOUDFLARE_ZONE_ID}" \
	--var "cloudflare_api_token=${CLOUDFLARE_API_TOKEN}"