# __PROJECT_NAME__ Infrastructure

Terraform base para `__PROJECT_NAME__`.

## Ambientes

```text
infrastructure/
└─ environments/
   ├─ dev/
   ├─ staging/
   └─ prod/
```

## Modulos sugeridos

- Cognito para autenticacion.
- S3 + CloudFront para frontend estatico.
- API Gateway + Lambda para backend.
- DynamoDB o RDS segun necesidades del dominio.
- SSM Parameter Store y Secrets Manager para configuracion sensible.

## Primeros pasos

1. Copia `terraform.tfvars.example` a `terraform.tfvars`.
2. Configura backend remoto de estado si aplica.
3. Ejecuta `terraform init`, `terraform plan` y `terraform apply` por ambiente.

Ver `remote-state.md` antes de usar ambientes compartidos.

