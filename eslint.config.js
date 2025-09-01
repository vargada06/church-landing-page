import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: ['dist/**/*'], // Ignore the dist directory completely
  },
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'], plugins: { js }, extends: ['js/recommended'] },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect', // Automatikusan felismeri a telepített React verziót
      },
    },
  },
  {
    files: ['**/*.jsx', '**/*.tsx'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off', // Disable prop-types since we're using TypeScript
      // ...egyéb szabályok...
    },
  },
]);
