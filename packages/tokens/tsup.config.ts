import { defineConfig } from 'tsup'

const OUTPUT_DIR = 'build'

export default defineConfig({
  name: '@vega-ui/tokens',
  entry: ['src/**/*'],
  clean: true,
  outDir: OUTPUT_DIR,
  dts: true,
  format: 'esm',
})