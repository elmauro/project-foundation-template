variable "project" {
  description = "Project slug."
  type        = string
  default     = "__PROJECT_SLUG__"
}

variable "environment" {
  description = "Deployment environment."
  type        = string
  default     = "dev"
}

variable "aws_region" {
  description = "AWS region."
  type        = string
  default     = "__AWS_REGION__"
}
