# Web Deployment

Guide to build, deploy and view the initial web page for `__PROJECT_NAME__`.

## Goal

Deploy the generated frontend to AWS using:

- S3 private bucket for static assets.
- CloudFront distribution for HTTPS delivery.
- GitHub Actions workflow for build, upload and cache invalidation.

## 1. Verify the frontend locally

```bash
cd frontend
npm install
npm run build
npm run preview
```

Open the local preview URL shown by Vite and confirm the initial page loads.

## 2. Create the web infrastructure

```bash
cd infrastructure/web
terraform init
terraform plan -var-file=dev.tfvars
terraform apply -var-file=dev.tfvars
```

After apply, capture these outputs:

```bash
terraform output web_bucket_name
terraform output cloudfront_distribution_id
terraform output cloudfront_domain_name
terraform output web_url
```

## 3. Configure GitHub environment

Create a GitHub environment named `dev` and define:

### Secrets

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

### Variables

- `AWS_REGION`: `__AWS_REGION__`
- `WEB_S3_BUCKET`: value from `terraform output web_bucket_name`
- `CLOUDFRONT_DISTRIBUTION_ID`: value from `terraform output cloudfront_distribution_id`
- `CLOUDFRONT_DOMAIN_NAME`: value from `terraform output cloudfront_domain_name`

## 4. Deploy the web app

Run the GitHub Actions workflow:

```text
Actions -> Deploy Web -> Run workflow -> environment: dev
```

The workflow will:

1. Install frontend dependencies.
2. Build the frontend.
3. Sync `frontend/dist/` to S3.
4. Invalidate CloudFront.

## 5. Open the initial site

Use:

```text
https://<CLOUDFRONT_DOMAIN_NAME>
```

or the `web_url` Terraform output.

## Troubleshooting

- If the page returns Access Denied, first confirm the deploy workflow completed after the Terraform apply. The workflow validates `frontend/dist/index.html`, uploads it to S3, verifies `index.html` exists in the bucket and waits for CloudFront invalidation to complete.
- If Access Denied continues, verify the GitHub environment variables point to the same Terraform outputs used by the CloudFront distribution: `WEB_S3_BUCKET` and `CLOUDFRONT_DISTRIBUTION_ID`.
- You can verify the object manually with `aws s3api head-object --bucket <WEB_S3_BUCKET> --key index.html`.
- If the object exists but the site still returns Access Denied, run a CloudFront invalidation for `/*` or rerun the deploy workflow.
- If the page shows an old build, check the CloudFront invalidation step.
- If the workflow cannot upload, verify `WEB_S3_BUCKET` and IAM permissions.
- If the workflow cannot invalidate CloudFront, verify `CLOUDFRONT_DISTRIBUTION_ID`.

