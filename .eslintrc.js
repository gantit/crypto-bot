module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  env: {
    node: true,
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          // 1. node "builtin" modules
          // ex: 'fs', 'path'
          'builtin',
          // 2. "external" modules
          // ex: 'axios', 'lodash'
          'external',
          // 3. "internal" modules
          // ex: 'src/foo'
          'internal',
          // 4. modules from a "parent" directory
          // ex: '../foo', '../../foo/qux'
          // AND
          // "sibling" modules from the same or a sibling's directory
          // ex: './bar', './bar/baz'
          ['sibling', 'parent'],
          // 6. "type" imports
          // ex: import type { Foo } from 'foo'
          'type',
          // 5. "index" of the current directory
          // ex: './'
          'index',
        ],
        pathGroups: [
          {
            pattern: '{*react, mobx-react}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'components/**',
            group: 'type',
            position: 'after',
          },

          {
            pattern: 'hooks/**',
            group: 'type',
            position: 'after',
          },
          {
            pattern: 'assets/**',
            group: 'type',
            position: 'after',
          },
          {
            pattern: './styles',
            group: 'index',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
