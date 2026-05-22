#!/usr/bin/env bash
set -euo pipefail

STAGE="${1:-dev}"
REGION="${AWS_REGION:-__AWS_REGION__}"

LAYERS=(layer-transversal layer-email layer-otp layer-engine)
APIS=(auth-api admin-api tenant-api transaction-api email-api otp-api)

for layer in "${LAYERS[@]}"; do
  if [ -f "$layer/serverless.yml" ]; then
    echo "Deploying $layer"
    (cd "$layer" && npx serverless deploy --stage "$STAGE" --region "$REGION")
  fi
done

for api in "${APIS[@]}"; do
  if [ -f "$api/serverless.common.yml" ]; then
    echo "Deploying $api"
    (cd "$api" && npx serverless deploy --config serverless.common.yml --stage "$STAGE" --region "$REGION")
  fi
done

