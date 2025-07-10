import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactNative from '@react-native/eslint-config'
import { defineConfig } from 'eslint/config';
import reactHooks from 'eslint-plugin-react-hooks'
import pluginJest from 'eslint-plugin-jest'

export default defineConfig([
  tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}', '**/*.ts', '**/*.tsx'],
    plugins: { 'react-hooks': reactHooks, js, 'react-native': reactNative },
    rules: {
      quotes: ['error', 'single'],
      'object-curly-spacing': ['error', 'always'],
      'jsx-quotes': ['error', 'prefer-single'],
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      'no-unused-vars': 'off'
    },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.spec.js', '**/*.spec.ts', '**/*.test.ts', '**/*.test.tsx', '**/*.spec.tsx'],
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },
]);
