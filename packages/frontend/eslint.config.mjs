// eslint.config.mjs
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import astro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import promise from 'eslint-plugin-promise';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

export default [
  // Ignorierte Pfade (statt .eslintignore)
  {
    ignores: ['dist/', 'node_modules/', '.astro/', 'src/lib/types.ts']
  },

  // Base JS
  js.configs.recommended,

  // Prettier: Konflikte deaktivieren
  prettierConfig,

  // Deine globalen Basis-/Prettier-/Unicorn-Regeln
  {
    plugins: { prettier: prettierPlugin, unicorn },
    rules: {
      indent: 'off', // let Prettier handle indentation; avoids TSX recursion crash
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],

      // Prettier-Integration + deine Optionen
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
          tabWidth: 2,
          useTabs: false,
          semi: true,
          singleQuote: true,
          jsxSingleQuote: true,
          trailingComma: 'none',
          bracketSpacing: true,
          bracketSameLine: false,
          arrowParens: 'always'
        }
      ],

      // Unicorn-Anpassungen
      'unicorn/filename-case': [
        'error',
        {
          cases: { pascalCase: true, camelCase: true, kebabCase: true }
        }
      ],
      'unicorn/prevent-abbreviations': [
        'error',
        {
          ignore: [String.raw`\.e2e$`, /^ignore/i]
        }
      ]
    }
  },

  // Empfohlene Regelsets, die du vorher “extended” hast
  {
    plugins: { 'jsx-a11y': jsxA11y, promise, sonarjs, unicorn },
    rules: {
      ...jsxA11y.configs.recommended.rules,
      ...promise.configs.recommended.rules,
      ...sonarjs.configs.recommended.rules,
      ...unicorn.configs.recommended.rules
    }
  },

  // TypeScript-Empfehlungen (ohne Type-Checking) – KORREKT: als eigenständige Blöcke (Array)
  ...tseslint.configs.recommended,

  // Zusätzliche TS-Regeln wie in deiner alten Konfig
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' }
      ],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    }
  },

  // .d.ts Override
  {
    files: ['**/*.d.ts'],
    rules: { '@typescript-eslint/triple-slash-reference': 'off' }
  },

  // Astro (richtet Parser/Processor ein)
  ...astro.configs.recommended,

  // Deine Astro-spezifischen Anpassungen
  {
    files: ['**/*.astro'],
    plugins: { astro, 'jsx-a11y': jsxA11y },
    rules: {
      indent: 'off',
      'astro/no-conflict-set-directives': 'error',
      'astro/no-unused-define-vars-in-style': 'error',
      'jsx-a11y/anchor-has-content': 'off'
    }
  },

  // JS innerhalb von <script> in .astro
  {
    files: ['**/*.astro/*.js', '*.astro/*.js'],
    plugins: { prettier: prettierPlugin },
    rules: { 'prettier/prettier': 'off' }
  }
];
