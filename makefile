build:
	NODE_ENV=production npm run build

deploy-infra:
		export TF_VAR_namecheap_user_name=$$NAMECHEAP_USER_NAME && \
		export TF_VAR_namecheap_api_user=$$NAMECHEAP_API_USER && \
		export TF_VAR_namecheap_api_key=$$NAMECHEAP_API_KEY && \
		export TF_VAR_namecheap_client_ip=$$NAMECHEAP_CLIENT_IP && \
		cd ./.deploy && \
		terraform apply

deploy:
	aws s3 sync ./out/ s3://www.ryanep.com --delete --acl public-read && \
	aws cloudfront create-invalidation --distribution-id E1HLTN9EVBOIN8 --paths "/*"

clean:
	rm -rf ./public

release: clean build deploy-infra deploy
