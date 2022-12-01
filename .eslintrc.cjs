module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true
  },
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint']
}
