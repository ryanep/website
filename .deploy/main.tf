variable "name" {}
variable "aws_region" {}
variable "cdn_bucket_name" {}
variable "subdomain" {}
variable "domain" {}

variable "namecheap_user_name" {}
variable "namecheap_api_user" {}
variable "namecheap_api_key" {}
variable "namecheap_client_ip" {}

provider "aws" {
  region = var.aws_region
}

terraform {
  backend "s3" {
    bucket  = "ryanep-infrastructure"
    key     = "website.tfstate"
    region  = "eu-west-2"
    encrypt = true
  }
}

resource "aws_s3_bucket" "cdn" {
  bucket = var.cdn_bucket_name

  website {
    index_document = "index.html"
    error_document = "404.html"
  }
}

locals {
  s3_origin_id = "S3-${var.cdn_bucket_name}"
}

resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
  comment = "access-identity-${var.name}"
}

resource "aws_cloudfront_distribution" "cdn_s3_distribution" {
  origin {
    domain_name = aws_s3_bucket.cdn.bucket_domain_name
    origin_id   = local.s3_origin_id

    custom_origin_config {
      http_port              = "80"
      https_port             = "443"
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  aliases             = ["${var.subdomain}.${var.domain}"]
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  ordered_cache_behavior {
    path_pattern     = "*"
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false
      headers      = ["Origin"]

      cookies {
        forward = "none"
      }
    }

    min_ttl                = 0
    default_ttl            = 86400
    max_ttl                = 31536000
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "allow-all"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  viewer_certificate {
    acm_certificate_arn = "arn:aws:acm:us-east-1:992080571933:certificate/a881ed23-c6fe-4ee1-8a2f-2b7769412ee3"
    ssl_support_method  = "sni-only"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}

provider "namecheap" {
  user_name   = var.namecheap_user_name
  api_user    = var.namecheap_api_user
  api_key     = var.namecheap_api_key
  client_ip   = var.namecheap_client_ip
  use_sandbox = false
}

resource "namecheap_domain_records" "domain-com" {
  domain = var.domain
  mode   = "MERGE"

  record {
    hostname = "@"
    type     = "ALIAS"
    address  = "${var.subdomain}.${var.domain}"
    ttl      = 300
  }

  record {
    hostname = var.subdomain
    type     = "CNAME"
    address  = "${aws_cloudfront_distribution.cdn_s3_distribution.domain_name}."
  }
}
