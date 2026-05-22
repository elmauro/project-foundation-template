# Terraform Remote State

Terraform local state is acceptable only for early experiments. Shared environments should use remote state.

## Recommended baseline

- S3 bucket with versioning and encryption.
- DynamoDB table for state locking.
- Separate state key per project and environment.
- Restricted IAM access for state read/write.

## Example backend

```hcl
terraform {
  backend "s3" {
    bucket         = "<state-bucket>"
    key            = "__PROJECT_SLUG__/dev/terraform.tfstate"
    region         = "__AWS_REGION__"
    dynamodb_table = "<lock-table>"
    encrypt        = true
  }
}
```

## Bootstrap

Create the state bucket and lock table before enabling the backend block in each environment.

