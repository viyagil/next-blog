module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'import', 'unused-imports'],

  // 0 = off, 1 = warning, 2 = error
  rules: {
    // 기본
    semi: [2, 'never'],
    curly: 2,
    'no-unused-vars': 0,

    // react - https://github.com/jsx-eslint/eslint-plugin-react
    'react/jsx-key': 2,
    'react/jsx-no-target-blank': [0, { enforceDynamicLinks: 'always' }],
    'react/prop-types': 0,
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],

    // react hooks - https://www.npmjs.com/package/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,

    // typescript - https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin
    '@typescript-eslint/naming-convention': [
      2,
      { selector: 'interface', format: ['PascalCase'] },
      { selector: 'typeAlias', format: ['PascalCase'] },
      { selector: 'enum', format: ['PascalCase'] },
      { selector: 'enumMember', format: ['PascalCase'] },
    ],
    '@typescript-eslint/member-ordering': [
      2,
      {
        default: [
          // Index signature
          'signature',

          // fields
          'public-field',
          'protected-field',
          'private-field',

          // constructor
          'constructor',

          // method
          'public-method',
          'protected-method',
          'private-method',
        ],
      },
    ],

    // import - https://github.com/import-js/eslint-plugin-import
    'import/no-unresolved': 0,
    'import/no-named-as-default': 0,
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    // unused-imports = https://github.com/sweepline/eslint-plugin-unused-imports
    'unused-imports/no-unused-imports': 2,
    'unused-imports/no-unused-vars': [1, { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }],
  },
}
