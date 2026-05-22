import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:51730',
    supportFile: 'cypress/support/e2e.ts',
  },
});
