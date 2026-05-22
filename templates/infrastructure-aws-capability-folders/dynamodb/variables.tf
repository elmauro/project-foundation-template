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

locals {
  tags = {
    Project     = var.project
    Environment = var.environment
  }
}
