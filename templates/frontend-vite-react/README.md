# __PROJECT_NAME__ Frontend

Frontend web para `__PROJECT_NAME__`.

## Stack sugerido

- React
- TypeScript
- Vite
- Tailwind CSS
- Cypress para E2E
- Jest o Vitest para pruebas unitarias

## Variables

Usa `.env.local` basado en `.env.example`.

```text
VITE_APP_NAME=__FRONTEND_APP_NAME__
VITE_API_BASE_URL=
VITE_COGNITO_USER_POOL_ID=
VITE_COGNITO_CLIENT_ID=
VITE_AWS_REGION=__AWS_REGION__
```

## Convenciones

- No hardcodear URLs, ids de Cognito ni secretos.
- Centralizar llamadas HTTP en `src/services/`.
- Mantener tipos compartidos bajo `src/types/`.
- Documentar contratos relevantes en `docs/api/`.

