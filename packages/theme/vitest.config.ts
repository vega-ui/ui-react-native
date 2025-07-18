import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsconfigPaths({ root: '../../', configNames: ['tsconfig.test.json'] }),
  ],
})