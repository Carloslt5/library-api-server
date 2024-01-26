module.exports = {
  env: {
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['standard-with-typescript', 'prettier'],
  overrides: [
    {
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
      project: ['./**/tsconfig.json'],
    },
  ],
  ignorePatterns: ['**/*.eslintrc.js'],
  rules: {
    '@typescript-eslint/no-misused-promises': 'off',
  },
}
