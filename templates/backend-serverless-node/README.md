# __PROJECT_NAME__ Backend

Backend base para `__PROJECT_NAME__`.

## Stack sugerido

- Node.js 20
- AWS Lambda
- API Gateway
- Serverless Framework o despliegue equivalente
- Jest para pruebas
- Terraform para infraestructura compartida cuando aplique

## Estructura

```text
backend/
├─ src/
│  ├─ handlers/
│  ├─ services/
│  └─ shared/
├─ tests/
├─ serverless.common.yml
└─ package.json
```

## Convenciones

- Handlers pequenos: validar entrada, llamar servicios y mapear respuesta.
- Log estructurado con request id y contexto.
- Configuracion por ambiente via variables, SSM o Secrets Manager.
- Contratos HTTP documentados en `docs/api/`.

