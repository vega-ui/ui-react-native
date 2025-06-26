import { defineConfig } from 'tsup'

const OUTPUT_DIR = 'build'

export default defineConfig({
  name: '@vega-ui/icons-react-native',
  entry: ['src/**/*.ts', 'src/**/*.tsx'],
  clean: true,
  treeshake: true,
  outDir: OUTPUT_DIR,
  dts: true,
  format: 'esm',
  external: ['react-native', 'react', 'react-native-svg', 'reanimated-lucide'],
})