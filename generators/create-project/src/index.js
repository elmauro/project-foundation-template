#!/usr/bin/env node

import { mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const templateRoot = path.resolve(__dirname, '../../../templates');
const terraformModulesRoot = path.resolve(__dirname, '../../../terraform-modules');
const defaultOutputRoot = path.resolve(__dirname, '../../../generated');

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
    OWNER_TEAM: String(args['owner-team'] ?? 'platform'),
    PROJECT_DIR: projectDir,
    PROJECTS_ROOT: path.dirname(projectDir),
  };
}

function replacePlaceholders(value, context) {
  return Object.entries(context).reduce((current, [key, replacement]) => {
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

async function copyTemplateDirectory(sourceDir, targetDir, context) {
  await mkdir(targetDir, { recursive: true });

  const entries = await readdir(sourceDir);

  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry);
    const resolvedName = resolveTemplateName(entry, context);
    const targetPath = path.join(targetDir, resolvedName);
    const sourceStat = await stat(sourcePath);

    if (sourceStat.isDirectory()) {
      await copyTemplateDirectory(sourcePath, targetPath, context);
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

  console.log(`Generated ${context.PROJECT_NAME} at ${projectDir}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});

