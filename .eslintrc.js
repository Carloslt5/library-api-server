module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['standard-with-typescript', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        project: ['./**/tsconfig.json'],
      },
    },
  ],
  ignorePatterns: ['**/*.eslintrc.js'],
  rules: {
    '@typescript-eslint/no-misused-promises': 'off',
  },
}
