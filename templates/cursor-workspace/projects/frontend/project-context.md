# Frontend Context - __PROJECT_NAME__

## Overview

Frontend web para `__PROJECT_NAME__`, dominio `__BUSINESS_DOMAIN__`.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS

## Expected structure

```text
frontend/
├─ src/
│  ├─ components/
│  ├─ pages/
│  ├─ routes/
│  ├─ services/
│  ├─ types/
│  └─ utils/
├─ docs/
└─ package.json
```

Generated features: `__FRONTEND_FEATURES__`

Use `frontend/frontend.config.json` as the source of truth for selected frontend features.

## Rules

- No hardcodear configuracion de ambiente.
- Mantener servicios HTTP en `src/services/`.
- Actualizar tipos y tests cuando cambien contratos API.
- Documentar rutas, flujos criticos y despliegue frontend.

