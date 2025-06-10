import { defineConfig } from 'tsup'

const OUTPUT_DIR = 'build'

export default defineConfig({
  name: '@vega-ui/theme',
  entry: ['src/**/*'],
  clean: true,
  outDir: OUTPUT_DIR,
  external: ['react'],
  dts: true,
  format: 'esm',
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
})