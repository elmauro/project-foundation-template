# Example 01 — Create a project

All commands run from `project-foundation-template/generators/create-project` after `npm install`.

## Basic full-stack (Terraform)

```powershell
npm run create -- `
  --name "Customer Portal" `
  --slug customer-portal `
  --preset fullstack-aws-terraform `
  --domain "customer engagement" `
  --aws-region us-east-1 `
  --projects-root "C:\Projects"
```

Output: `C:\Projects\customer-portal\`

## Enterprise full-stack (recommended)

Frontend enterprise + backend multi-API + infra by capability:

```powershell
npm run create -- `
  --name "Customer Portal" `
  --slug customer-portal `
  --preset fullstack-aws-enterprise `
  --domain "customer engagement" `
  --aws-region us-east-1 `
  --target-dir "C:\Projects\customer-portal"
```

## Choose backend APIs and layers

```powershell
npm run create -- `
  --name "Customer Portal" `
  --slug customer-portal `
  --preset fullstack-aws-enterprise `
  --backend-apis core,auth,admin,notification,worker `
  --backend-layers transversal,domain `
  --target-dir "C:\Projects\customer-portal"
```

Valid APIs: `core`, `auth`, `admin`, `notification`, `worker`  
Valid layers: `transversal`, `domain`

## Choose frontend features

```powershell
npm run create -- `
  --name "Customer Portal" `
  --slug customer-portal `
  --preset fullstack-aws-enterprise `
  --frontend-features router,services,types,tailwind,auth,cognito,msw,cypress,jest,radix `
  --target-dir "C:\Projects\customer-portal"
```

## Frontend only

```powershell
npm run create -- `
  --name "Marketing Site" `
  --slug marketing-site `
  --preset frontend-vite-react-enterprise `
  --target-dir "C:\Projects\marketing-site"
```

## Backend only

```powershell
npm run create -- `
  --name "Orders API" `
  --slug orders-api `
  --preset backend-serverless-multi-api `
  --backend-apis core,auth,worker `
  --target-dir "C:\Projects\orders-api"
```

## With product backlog scaffold (Capa B)

Adds `cursor/company/future-work/` with empty registry and FW templates:

```powershell
npm run create -- `
  --name "Acme Platform" `
  --slug acme-platform `
  --preset fullstack-aws-enterprise `
  --with-product-backlog true `
  --fw-prefix ACME `
  --story-prefix ACME `
  --target-dir "C:\Projects\acme-platform"
```

Generated IDs: backlog `FW-ACME-001`, execution ticket `ACME-001`.

## Placeholders replaced at generation

| Placeholder | Set by |
| --- | --- |
| `__PROJECT_NAME__` | `--name` |
| `__PROJECT_SLUG__` | `--slug` |
| `__FW_PREFIX__` / `__STORY_PREFIX__` | `--fw-prefix`, `--story-prefix` (or slug uppercase) |
| `__AWS_REGION__` | `--aws-region` |

See [`generation-contract.md`](../generation-contract.md).

## After generation

```text
<project>/
├─ .cursor/rules/          ← active Cursor rules
├─ cursor/                 ← prompts, templates, playbook, scripts
├─ frontend/ | backend/ | infrastructure/
├─ docs/
└─ project.config.json
```

Next: [02-cursor-kit-workflow.md](02-cursor-kit-workflow.md)
