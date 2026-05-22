# Backend Context - __PROJECT_NAME__

## Overview

Backend para `__PROJECT_NAME__`, dominio `__BUSINESS_DOMAIN__`.

## Stack

- Node.js 20
- AWS Lambda
- API Gateway
- Terraform para infraestructura

## Expected structure

```text
backend/
├─ src/
│  ├─ handlers/
│  ├─ services/
│  └─ shared/
├─ tests/
└─ package.json
```

## Rules

- Separar handlers, servicios y utilidades compartidas.
- Validar inputs en el borde HTTP.
- Mantener errores y respuestas consistentes.
- Documentar endpoints y contratos en `docs/api/`.
- No almacenar secretos en codigo ni archivos versionados.

