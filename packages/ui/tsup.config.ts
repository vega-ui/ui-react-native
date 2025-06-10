import { defineConfig } from 'tsup'

const OUTPUT_DIR = 'build'

export default defineConfig({
  name: '@vega-ui/react-native',
  entry: ['src/**/*'],
  clean: true,
  outDir: OUTPUT_DIR,
  external: ['react-native', 'react'],
  dts: true,
  format: 'esm',
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
})