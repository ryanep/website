terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
    namecheap = {
      source  = "namecheap/namecheap"
      version = ">= 2.0.0"
    }
  }
  required_version = ">= 0.13"
}
