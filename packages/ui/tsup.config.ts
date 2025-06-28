import { defineConfig } from 'tsup'

const OUTPUT_DIR = 'build'

export default defineConfig({
  name: '@vega-ui/react-native',
  entry: ['src/**/*', '!src/**/*.{test.ts,test.tsx}'],
  clean: true,
  outDir: OUTPUT_DIR,
  external: ['react-native', 'react', 'react-native-reanimated'],
  dts: true,
  format: 'esm',
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
})