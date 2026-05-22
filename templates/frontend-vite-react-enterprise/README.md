# __PROJECT_NAME__ Frontend

Frontend enterprise para `__PROJECT_NAME__`, basado en la estructura usada por proyectos Vite/React existentes.

## Stack

- React 18
- Vite
- TypeScript
- Axios
- Tailwind CSS
- Radix UI primitives
- Cognito opcional
- Jest + React Testing Library
- Cypress + MSW

## Structure

```text
frontend/
├─ cypress/
├─ docs/
├─ public/
├─ src/
│  ├─ components/
│  │  └─ ui/
│  ├─ contexts/
│  ├─ hooks/
│  ├─ lib/
│  ├─ mocks/
│  │  ├─ data/
│  │  └─ handlers/
│  ├─ pages/
│  ├─ routes/
│  ├─ services/
│  ├─ types/
│  └─ utils/
└─ package.json
```

## Commands

```bash
npm run dev
npm run build
npm test
npm run lint
npm run cy:e2e:run
```

