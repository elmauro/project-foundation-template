# __PROJECT_NAME__ Backend

Backend multi-API serverless para `__PROJECT_NAME__`, alineado con una estructura de APIs separadas, Lambda layers, database, tests e infraestructura compartida.

## Structure

```text
backend/
├─ auth-api/
├─ admin-api/
├─ tenant-api/
├─ transaction-api/
├─ email-api/
├─ otp-api/
├─ layer-transversal/
├─ layer-email/
├─ layer-otp/
├─ layer-engine/
├─ database/
├─ docs/
├─ tests/
├─ deploy-backend.sh
└─ package.json
```

Renombra o elimina APIs que no apliquen al dominio del nuevo proyecto.

## Deploy convention

Deploy layers first, then APIs.

