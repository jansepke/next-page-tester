module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  reportUnusedDisableDirectives: true,
  plugins: [
    'react',
    'prettier',
    'jest',
    'testing-library',
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'plugin:jest/recommended',
    'plugin:testing-library/react',
  ],
  env: {
    browser: true,
    jest: true,
    node: true,
    es6: true,
  },
  rules: {
    'jest/expect-expect': ['off'],

    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
  },
};
