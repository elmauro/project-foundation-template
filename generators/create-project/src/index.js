#!/usr/bin/env node

import { mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const templateRoot = path.resolve(__dirname, '../../../templates');
const terraformModulesRoot = path.resolve(__dirname, '../../../terraform-modules');
const defaultOutputRoot = path.resolve(__dirname, '../../../generated');

const backendApiDirs = {
  core: 'core-api',
  auth: 'auth-api',
  admin: 'admin-api',
  notification: 'notification-api',
  worker: 'worker-api',
};

const backendLayerDirs = {
  transversal: 'layer-transversal',
  domain: 'layer-domain',
};

const defaultBackendApis = ['core', 'auth', 'admin'];
const defaultBackendLayers = ['transversal'];

const frontendFeatures = {
  router: 'router',
  services: 'services',
  types: 'types',
  tailwind: 'tailwind',
  auth: 'auth',
  cognito: 'cognito',
  msw: 'msw',
  cypress: 'cypress',
  jest: 'jest',
  radix: 'radix',
};

const defaultFrontendFeatures = ['router', 'services', 'types', 'tailwind'];

const presetTemplates = {
  'frontend-only': [
    ['frontend-vite-react', 'frontend'],
    ['cursor-config', '.cursor'],
    ['cursor-workspace', 'cursor'],
    ['docs', 'docs'],
    ['root-common', '.'],
    ['github-workflows', '.github/workflows'],
    ['local-dev', 'local-dev'],
  ],
  'backend-only': [
    ['backend-serverless-node', 'backend'],
    ['cursor-config', '.cursor'],
    ['cursor-workspace', 'cursor'],
    ['docs', 'docs'],
    ['root-common', '.'],
    ['github-workflows', '.github/workflows'],
    ['local-dev', 'local-dev'],
  ],
  'fullstack-aws': [
    ['frontend-vite-react', 'frontend'],
    ['backend-serverless-node', 'backend'],
    ['cursor-config', '.cursor'],
    ['cursor-workspace', 'cursor'],
    ['docs', 'docs'],
    ['root-common', '.'],
    ['github-workflows', '.github/workflows'],
    ['local-dev', 'local-dev'],
  ],
  'fullstack-aws-terraform': [
    ['frontend-vite-react', 'frontend'],
    ['backend-serverless-node', 'backend'],
    ['infrastructure-terraform-aws', 'infrastructure'],
    ['cursor-config', '.cursor'],
    ['cursor-workspace', 'cursor'],
    ['docs', 'docs'],
    ['root-common', '.'],
    ['github-workflows', '.github/workflows'],
    ['local-dev', 'local-dev'],
  ],
  'frontend-vite-react-enterprise': [
    ['frontend-vite-react-enterprise', 'frontend'],
    ['cursor-config', '.cursor'],
    ['cursor-workspace', 'cursor'],
    ['docs', 'docs'],
    ['root-common', '.'],
    ['github-workflows', '.github/workflows'],
    ['local-dev', 'local-dev'],
  ],
  'backend-serverless-multi-api': [
    ['backend-serverless-multi-api', 'backend'],
    ['cursor-config', '.cursor'],
    ['cursor-workspace', 'cursor'],
    ['docs', 'docs'],
    ['root-common', '.'],
    ['github-workflows', '.github/workflows'],
    ['local-dev', 'local-dev'],
  ],
  'infrastructure-aws-capability-folders': [
    ['infrastructure-aws-capability-folders', 'infrastructure'],
    ['cursor-config', '.cursor'],
    ['cursor-workspace', 'cursor'],
    ['docs', 'docs'],
    ['root-common', '.'],
    ['github-workflows', '.github/workflows'],
    ['local-dev', 'local-dev'],
  ],
  'fullstack-aws-enterprise': [
    ['frontend-vite-react-enterprise', 'frontend'],
    ['backend-serverless-multi-api', 'backend'],
    ['infrastructure-aws-capability-folders', 'infrastructure'],
    ['cursor-config', '.cursor'],
    ['cursor-workspace', 'cursor'],
    ['docs', 'docs'],
    ['root-common', '.'],
    ['github-workflows', '.github/workflows'],
    ['local-dev', 'local-dev'],
  ],
};

function parseArgs(argv) {
  const args = {};

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (!token.startsWith('--')) {
      continue;
    }

    const key = token.slice(2);
    const value = argv[index + 1]?.startsWith('--') ? true : argv[index + 1];
    args[key] = value ?? true;

    if (value !== true) {
      index += 1;
    }
  }

  return args;
}

function toSlug(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function parseListOption(value, defaultValue) {
  if (value === undefined) {
    return defaultValue;
  }

  if (value === true) {
    throw new Error('List options require a comma-separated value.');
  }

  return String(value)
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function validateList(name, selected, allowed) {
  const invalid = selected.filter((item) => !allowed[item]);

  if (invalid.length > 0) {
    throw new Error(`Invalid ${name}: ${invalid.join(', ')}. Valid values: ${Object.keys(allowed).join(', ')}`);
  }
}

function uniqueOrdered(values) {
  return values.filter((value, index) => values.indexOf(value) === index);
}

function presetIncludesTemplate(preset, templateName) {
  return presetTemplates[preset].some(([name]) => name === templateName);
}

function buildFrontendSkipPaths(selectedFeatures) {
  const selected = new Set(selectedFeatures);
  const skip = [];

  if (!selected.has('router')) {
    skip.push('src/routes', 'src/pages/Login');
  }

  if (!selected.has('services')) {
    skip.push('src/services');
  }

  if (!selected.has('types')) {
    skip.push('src/types');
  }

  if (!selected.has('auth')) {
    skip.push('src/contexts', 'src/pages/Login');
  }

  if (!selected.has('msw')) {
    skip.push('src/mocks', 'src/enableMocking.ts');
  }

  if (!selected.has('cypress')) {
    skip.push('cypress', 'cypress.config.ts');
  }

  if (!selected.has('jest')) {
    skip.push('jest.config.ts', 'tsconfig.jest.json', 'src/setupTests.ts');
  }

  if (!selected.has('tailwind')) {
    skip.push('tailwind.config.ts', 'src/lib', 'src/components/ui');
  }

  if (!selected.has('radix')) {
    skip.push('src/components/ui');
  }

  return skip;
}

function shouldSkipPath(relativePath, context) {
  const normalized = relativePath.replaceAll(path.sep, '/');

  return [...(context.SKIP_TEMPLATE_PATHS ?? [])].some((skipPath) => (
    normalized === skipPath || normalized.startsWith(`${skipPath}/`)
  ));
}

function buildContext(args) {
  if (!args.name) {
    throw new Error('Missing required option: --name');
  }

  const projectName = String(args.name);
  const projectSlug = String(args.slug ?? toSlug(projectName));
  const preset = String(args.preset ?? 'fullstack-aws-terraform');

  if (!presetTemplates[preset]) {
    throw new Error(`Unknown preset "${preset}". Valid presets: ${Object.keys(presetTemplates).join(', ')}`);
  }

  const selectedBackendApis = uniqueOrdered(parseListOption(args['backend-apis'], defaultBackendApis));
  const selectedBackendLayers = uniqueOrdered(parseListOption(args['backend-layers'], defaultBackendLayers));
  const selectedFrontendFeatures = uniqueOrdered(parseListOption(args['frontend-features'], defaultFrontendFeatures));

  validateList('backend APIs', selectedBackendApis, backendApiDirs);
  validateList('backend layers', selectedBackendLayers, backendLayerDirs);
  validateList('frontend features', selectedFrontendFeatures, frontendFeatures);

  const selectedBackendApiDirs = selectedBackendApis.map((api) => backendApiDirs[api]);
  const selectedBackendLayerDirs = selectedBackendLayers.map((layer) => backendLayerDirs[layer]);
  const skippedBackendDirs = [
    ...Object.values(backendApiDirs).filter((dir) => !selectedBackendApiDirs.includes(dir)),
    ...Object.values(backendLayerDirs).filter((dir) => !selectedBackendLayerDirs.includes(dir)),
  ];
  const skippedFrontendPaths = buildFrontendSkipPaths(selectedFrontendFeatures);
  const projectsRoot = args['projects-root'] ?? args.output ?? defaultOutputRoot;
  const projectDir = args['target-dir']
    ? path.resolve(String(args['target-dir']))
    : path.join(path.resolve(String(projectsRoot)), projectSlug);

  return {
    PROJECT_NAME: projectName,
    PROJECT_SLUG: projectSlug,
    BUSINESS_DOMAIN: String(args.domain ?? 'general business'),
    AWS_REGION: String(args['aws-region'] ?? 'us-east-1'),
    PRESET: preset,
    FRONTEND_APP_NAME: String(args['frontend-app-name'] ?? `${projectSlug}-frontend`),
    BACKEND_SERVICE_NAME: String(args['backend-service-name'] ?? `${projectSlug}-backend`),
    BACKEND_APIS: selectedBackendApis,
    BACKEND_LAYERS: selectedBackendLayers,
    BACKEND_API_DIRS: selectedBackendApiDirs,
    BACKEND_LAYER_DIRS: selectedBackendLayerDirs,
    BACKEND_API_DIRS_BASH: selectedBackendApiDirs.join(' '),
    BACKEND_LAYER_DIRS_BASH: selectedBackendLayerDirs.join(' '),
    FRONTEND_FEATURES: selectedFrontendFeatures,
    FRONTEND_FEATURES_TEXT: selectedFrontendFeatures.join(','),
    OWNER_TEAM: String(args['owner-team'] ?? 'platform'),
    PROJECT_DIR: projectDir,
    PROJECTS_ROOT: path.dirname(projectDir),
    SKIP_TEMPLATE_DIRS: new Set(skippedBackendDirs),
    SKIP_TEMPLATE_PATHS: new Set(skippedFrontendPaths),
    HAS_MULTI_API_BACKEND: presetIncludesTemplate(preset, 'backend-serverless-multi-api'),
    HAS_ENTERPRISE_FRONTEND: presetIncludesTemplate(preset, 'frontend-vite-react-enterprise'),
  };
}

function replacePlaceholders(value, context) {
  return Object.entries(context).reduce((current, [key, replacement]) => {
    if (Array.isArray(replacement)) {
      return current.replaceAll(`__${key}__`, replacement.join(','));
    }

    if (typeof replacement !== 'string') {
      return current;
    }

    return current.replaceAll(`__${key}__`, replacement);
  }, value);
}

function resolveTemplateName(entry, context) {
  const resolvedName = replacePlaceholders(entry, context);

  if (resolvedName === 'env.example') {
    return '.env.example';
  }

  if (resolvedName === 'gitignore') {
    return '.gitignore';
  }

  return resolvedName;
}

async function copyTemplateDirectory(sourceDir, targetDir, context, relativeRoot = '') {
  await mkdir(targetDir, { recursive: true });

  const entries = await readdir(sourceDir);

  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry);
    const resolvedName = resolveTemplateName(entry, context);
    const relativePath = relativeRoot ? `${relativeRoot}/${entry}` : entry;
    const targetPath = path.join(targetDir, resolvedName);
    const sourceStat = await stat(sourcePath);

    if (shouldSkipPath(relativePath, context)) {
      continue;
    }

    if (sourceStat.isDirectory() && context.SKIP_TEMPLATE_DIRS?.has(entry)) {
      continue;
    }

    if (sourceStat.isDirectory()) {
      await copyTemplateDirectory(sourcePath, targetPath, context, relativePath);
      continue;
    }

    const content = await readFile(sourcePath, 'utf8');
    await mkdir(path.dirname(targetPath), { recursive: true });
    await writeFile(targetPath, replacePlaceholders(content, context), 'utf8');
  }
}

async function writeRootReadme(projectDir, context) {
  const content = `# ${context.PROJECT_NAME}

Generated from \`project-foundation-template\`.

## Project

- Slug: \`${context.PROJECT_SLUG}\`
- Domain: ${context.BUSINESS_DOMAIN}
- Preset: \`${context.PRESET}\`
- AWS region: \`${context.AWS_REGION}\`
- Owner team: \`${context.OWNER_TEAM}\`

## Structure

- \`.cursor/\`: active Cursor configuration and project rules.
- \`frontend/\`: web application when enabled by the preset.
- \`backend/\`: API and application services when enabled by the preset.
- \`infrastructure/\`: Terraform environments when enabled by the preset.
- \`cursor/\`: AI working context, prompts, templates and analysis artifacts.
- \`docs/\`: product, architecture and operational documentation.

## Context

- Start with \`project.config.json\`.
- Use \`cursor/context-map.md\` as the quick project map.
- Use \`.cursor/rules/project-context.mdc\` for Cursor context discovery rules.
`;

  await writeFile(path.join(projectDir, 'README.md'), content, 'utf8');
}

async function writeProjectConfig(projectDir, context) {
  const content = {
    projectName: context.PROJECT_NAME,
    projectSlug: context.PROJECT_SLUG,
    businessDomain: context.BUSINESS_DOMAIN,
    preset: context.PRESET,
    awsRegion: context.AWS_REGION,
    frontendAppName: context.FRONTEND_APP_NAME,
    backendServiceName: context.BACKEND_SERVICE_NAME,
    backendApis: context.BACKEND_APIS,
    backendLayers: context.BACKEND_LAYERS,
    frontendFeatures: context.FRONTEND_FEATURES,
    ownerTeam: context.OWNER_TEAM,
    projectDir: context.PROJECT_DIR,
    projectsRoot: context.PROJECTS_ROOT,
    generatedBy: 'project-foundation-template',
    generatedAt: new Date().toISOString(),
  };

  await writeFile(
    path.join(projectDir, 'project.config.json'),
    `${JSON.stringify(content, null, 2)}\n`,
    'utf8',
  );
}

function buildFrontendPackage(context) {
  const features = new Set(context.FRONTEND_FEATURES);
  const scripts = {
    dev: 'vite',
    build: 'tsc -b && vite build',
    lint: 'eslint .',
    preview: 'vite preview',
  };
  const dependencies = {
    react: '^18.2.0',
    'react-dom': '^18.2.0',
  };
  const devDependencies = {
    '@eslint/js': '^9.21.0',
    '@types/node': '^22.14.1',
    '@types/react': '^18.2.14',
    '@types/react-dom': '^18.2.7',
    '@vitejs/plugin-react': '^4.3.4',
    eslint: '^9.21.0',
    'eslint-plugin-react-hooks': '^5.1.0',
    'eslint-plugin-react-refresh': '^0.4.19',
    typescript: '^5.3.3',
    'typescript-eslint': '^8.24.1',
    vite: '^6.2.0',
  };
  const pkg = {
    name: context.FRONTEND_APP_NAME,
    private: true,
    version: '0.1.0',
    type: 'module',
    scripts,
    dependencies,
    devDependencies,
  };

  if (features.has('router')) {
    dependencies['react-router-dom'] = '^7.5.0';
  }

  if (features.has('services')) {
    dependencies.axios = '^1.8.4';
  }

  if (features.has('tailwind')) {
    dependencies.clsx = '^2.1.1';
    dependencies['tailwind-merge'] = '^2.6.0';
    devDependencies.autoprefixer = '^10.4.21';
    devDependencies.postcss = '^8.5.6';
    devDependencies.tailwindcss = '^3.4.17';
  }

  if (features.has('cognito')) {
    dependencies['amazon-cognito-identity-js'] = '^6.3.16';
  }

  if (features.has('radix')) {
    dependencies['@radix-ui/react-dialog'] = '^1.1.15';
    dependencies['@radix-ui/react-label'] = '^2.1.7';
    dependencies['@radix-ui/react-select'] = '^2.2.6';
    dependencies['@radix-ui/react-slot'] = '^1.2.3';
    dependencies['@radix-ui/react-tabs'] = '^1.1.13';
    dependencies['@radix-ui/react-tooltip'] = '^1.2.7';
    dependencies['class-variance-authority'] = '^0.7.1';
    dependencies['lucide-react'] = '^0.462.0';
    dependencies.sonner = '^1.7.4';
  }

  if (features.has('jest')) {
    scripts.test = 'jest';
    devDependencies['@testing-library/jest-dom'] = '^6.6.3';
    devDependencies['@testing-library/react'] = '^16.3.0';
    devDependencies['@types/jest'] = '^29.5.14';
    devDependencies['identity-obj-proxy'] = '^3.0.0';
    devDependencies.jest = '^29.7.0';
    devDependencies['jest-environment-jsdom'] = '^29.7.0';
    devDependencies['ts-jest'] = '^29.3.1';
  }

  if (features.has('cypress')) {
    scripts['cy:dev'] = features.has('msw')
      ? 'cross-env VITE_USE_MSW=true vite --host 0.0.0.0 --port 51730'
      : 'vite --host 0.0.0.0 --port 51730';
    scripts['cy:e2e'] = 'start-server-and-test cy:dev http://localhost:51730 "cypress open"';
    scripts['cy:e2e:run'] = 'start-server-and-test cy:dev http://localhost:51730 "cypress run --e2e"';
    devDependencies['cross-env'] = '^7.0.3';
    devDependencies.cypress = '^14.3.0';
    devDependencies['start-server-and-test'] = '^2.0.11';
  }

  if (features.has('msw')) {
    devDependencies.msw = '^2.7.4';
    pkg.msw = {
      workerDirectory: ['public'],
    };
  }

  return pkg;
}

function buildFrontendMain(context) {
  const features = new Set(context.FRONTEND_FEATURES);
  const imports = [
    "import React from 'react';",
    "import ReactDOM from 'react-dom/client';",
  ];
  let appElement = '<App />';

  if (features.has('router')) {
    imports.push("import { BrowserRouter } from 'react-router-dom';");
    imports.push("import { AppRoutes } from './routes/AppRoutes';");
    appElement = '<AppRoutes />';
  } else {
    imports.push("import { App } from './App';");
  }

  if (features.has('auth')) {
    imports.push("import { AuthProvider } from './contexts/AuthContext';");
    appElement = `<AuthProvider>\n          ${appElement}\n        </AuthProvider>`;
  }

  if (features.has('msw')) {
    imports.push("import { enableMocking } from './enableMocking';");
  }

  imports.push("import './index.css';");

  const render = `ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    ${features.has('router') ? `<BrowserRouter>\n        ${appElement}\n      </BrowserRouter>` : appElement}
  </React.StrictMode>,
);`;

  if (features.has('msw')) {
    return `${imports.join('\n')}\n\nasync function bootstrap() {\n  await enableMocking();\n\n  ${render}\n}\n\nvoid bootstrap();\n`;
  }

  return `${imports.join('\n')}\n\n${render}\n`;
}

function buildFrontendAppRoutes(context) {
  const features = new Set(context.FRONTEND_FEATURES);
  const loginRoute = features.has('auth')
    ? "      <Route path={paths.login} element={<Login />} />\n"
    : '';
  const loginImport = features.has('auth')
    ? "import { Login } from '../pages/Login/Login';\n"
    : '';

  return `import { Navigate, Route, Routes } from 'react-router-dom';\nimport { Home } from '../pages/Home/Home';\n${loginImport}import { paths } from './paths';\n\nexport function AppRoutes() {\n  return (\n    <Routes>\n      <Route path={paths.home} element={<Home />} />\n${loginRoute}      <Route path=\"*\" element={<Navigate to={paths.home} replace />} />\n    </Routes>\n  );\n}\n`;
}

function buildFrontendPaths(context) {
  const features = new Set(context.FRONTEND_FEATURES);
  const loginPath = features.has('auth')
    ? "  login: '/login',\n"
    : '';

  return `export const paths = {\n  home: '/',\n${loginPath}  dashboard: '/dashboard',\n} as const;\n`;
}

function buildFrontendApp(context) {
  const features = new Set(context.FRONTEND_FEATURES);

  if (features.has('router')) {
    return `import { AppRoutes } from './routes/AppRoutes';\n\nexport function App() {\n  return <AppRoutes />;\n}\n`;
  }

  return `export function App() {\n  return (\n    <main>\n      <h1>${context.PROJECT_NAME}</h1>\n      <p>Frontend starter for ${context.BUSINESS_DOMAIN}.</p>\n    </main>\n  );\n}\n`;
}

function buildFrontendTsconfig(context) {
  const references = [
    {
      path: './tsconfig.app.json',
    },
  ];

  if (context.FRONTEND_FEATURES.includes('jest')) {
    references.push({
      path: './tsconfig.jest.json',
    });
  }

  return `${JSON.stringify({ files: [], references }, null, 2)}\n`;
}

function buildFrontendEslintConfig() {
  return `import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist', 'coverage', 'node_modules'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        AbortController: 'readonly',
        console: 'readonly',
        document: 'readonly',
        fetch: 'readonly',
        Headers: 'readonly',
        localStorage: 'readonly',
        navigator: 'readonly',
        Request: 'readonly',
        Response: 'readonly',
        sessionStorage: 'readonly',
        window: 'readonly',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
);
`;
}

function buildFrontendIndexCss(context) {
  const features = new Set(context.FRONTEND_FEATURES);

  if (features.has('tailwind')) {
    return `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n:root {\n  color-scheme: light;\n  font-family: Inter, system-ui, sans-serif;\n}\n\nbody {\n  margin: 0;\n}\n`;
  }

  return `:root {\n  color-scheme: light;\n  font-family: Inter, system-ui, sans-serif;\n}\n\nbody {\n  margin: 0;\n}\n\nmain {\n  padding: 2rem;\n}\n`;
}

function buildFrontendEnvExample(context) {
  const features = new Set(context.FRONTEND_FEATURES);
  const lines = [
    `VITE_APP_NAME=${context.FRONTEND_APP_NAME}`,
  ];

  if (features.has('services')) {
    lines.push('VITE_API_BASE_AUTH=');
    lines.push('VITE_API_BASE_APP=');
    lines.push('VITE_PROGRAM_ID=');
  }

  if (features.has('msw')) {
    lines.push('VITE_USE_MSW=false');
  }

  if (features.has('cognito')) {
    lines.push('VITE_COGNITO_USER_POOL_ID=');
    lines.push('VITE_COGNITO_CLIENT_ID=');
    lines.push(`VITE_AWS_REGION=${context.AWS_REGION}`);
  }

  return `${lines.join('\n')}\n`;
}

function buildFrontendApiConfig(context) {
  const features = new Set(context.FRONTEND_FEATURES);
  const lines = [
    'export const apiConfig = {',
    `  appName: import.meta.env.VITE_APP_NAME ?? '${context.FRONTEND_APP_NAME}',`,
  ];

  if (features.has('services')) {
    lines.push("  apiBaseAuth: import.meta.env.VITE_API_BASE_AUTH ?? '',");
    lines.push("  apiBaseApp: import.meta.env.VITE_API_BASE_APP ?? '',");
    lines.push("  programId: import.meta.env.VITE_PROGRAM_ID ?? '',");
  }

  if (features.has('cognito')) {
    lines.push(`  awsRegion: import.meta.env.VITE_AWS_REGION ?? '${context.AWS_REGION}',`);
    lines.push("  cognitoUserPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID ?? '',");
    lines.push("  cognitoClientId: import.meta.env.VITE_COGNITO_CLIENT_ID ?? '',");
  }

  lines.push('};');

  return `${lines.join('\n')}\n`;
}

function buildFrontendReadme(context) {
  return `# ${context.PROJECT_NAME} Frontend

Frontend for \`${context.PROJECT_NAME}\`.

## Generated Features

${context.FRONTEND_FEATURES.map((feature) => `- \`${feature}\``).join('\n')}

## Commands

\`\`\`bash
npm run dev
npm run build
npm run lint
\`\`\`

Use \`frontend.config.json\` as the source of truth for selected frontend features.
`;
}

async function writeFrontendConfig(projectDir, context) {
  if (!context.HAS_ENTERPRISE_FRONTEND) {
    return;
  }

  const frontendDir = path.join(projectDir, 'frontend');
  const content = {
    features: context.FRONTEND_FEATURES,
    framework: 'react',
    bundler: 'vite',
    language: 'typescript',
    packageName: context.FRONTEND_APP_NAME,
  };

  await writeFile(path.join(frontendDir, 'frontend.config.json'), `${JSON.stringify(content, null, 2)}\n`, 'utf8');
  await writeFile(path.join(frontendDir, 'package.json'), `${JSON.stringify(buildFrontendPackage(context), null, 2)}\n`, 'utf8');
  await writeFile(path.join(frontendDir, 'eslint.config.js'), buildFrontendEslintConfig(), 'utf8');
  await writeFile(path.join(frontendDir, 'tsconfig.json'), buildFrontendTsconfig(context), 'utf8');
  await writeFile(path.join(frontendDir, 'src', 'main.tsx'), buildFrontendMain(context), 'utf8');
  await writeFile(path.join(frontendDir, 'src', 'App.tsx'), buildFrontendApp(context), 'utf8');
  await writeFile(path.join(frontendDir, 'src', 'index.css'), buildFrontendIndexCss(context), 'utf8');
  await writeFile(path.join(frontendDir, '.env.example'), buildFrontendEnvExample(context), 'utf8');
  await writeFile(path.join(frontendDir, 'README.md'), buildFrontendReadme(context), 'utf8');

  if (context.FRONTEND_FEATURES.includes('router')) {
    await writeFile(path.join(frontendDir, 'src', 'routes', 'AppRoutes.tsx'), buildFrontendAppRoutes(context), 'utf8');
    await writeFile(path.join(frontendDir, 'src', 'routes', 'paths.ts'), buildFrontendPaths(context), 'utf8');
  }

  if (context.FRONTEND_FEATURES.includes('services')) {
    await writeFile(path.join(frontendDir, 'src', 'services', 'apiConfig.ts'), buildFrontendApiConfig(context), 'utf8');
  }
}

async function writeBackendConfig(projectDir, context) {
  if (!context.HAS_MULTI_API_BACKEND) {
    return;
  }

  const content = {
    apis: context.BACKEND_APIS,
    apiDirectories: context.BACKEND_API_DIRS,
    layers: context.BACKEND_LAYERS,
    layerDirectories: context.BACKEND_LAYER_DIRS,
    runtime: 'nodejs20.x',
    framework: 'serverless',
    deployScript: 'deploy-backend.sh',
  };

  await writeFile(
    path.join(projectDir, 'backend', 'backend.config.json'),
    `${JSON.stringify(content, null, 2)}\n`,
    'utf8',
  );
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const context = buildContext(args);
  const projectDir = context.PROJECT_DIR;

  await mkdir(projectDir, { recursive: true });

  for (const [templateName, outputName] of presetTemplates[context.PRESET]) {
    await copyTemplateDirectory(
      path.join(templateRoot, templateName),
      path.join(projectDir, outputName),
      context,
    );
  }

  if (context.PRESET === 'fullstack-aws-terraform' || context.PRESET === 'fullstack-aws-enterprise') {
    await copyTemplateDirectory(
      terraformModulesRoot,
      path.join(projectDir, 'infrastructure', 'modules'),
      context,
    );
  }

  await writeRootReadme(projectDir, context);
  await writeProjectConfig(projectDir, context);
  await writeFrontendConfig(projectDir, context);
  await writeBackendConfig(projectDir, context);

  console.log(`Generated ${context.PROJECT_NAME} at ${projectDir}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});

