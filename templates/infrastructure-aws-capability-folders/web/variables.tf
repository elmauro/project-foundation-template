variable "project" {
  type    = string
  default = "__PROJECT_SLUG__"
}

variable "environment" {
  type    = string
  default = "dev"
}

variable "aws_region" {
  type    = string
  default = "__AWS_REGION__"
}

variable "price_class" {
  description = "CloudFront price class."
  type        = string
  default     = "PriceClass_100"
}

locals {
  tags = {
    Project     = var.project
    Environment = var.environment
  }
}
