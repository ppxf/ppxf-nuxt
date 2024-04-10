module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    '@nuxt/eslint-config',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['tailwindcss'],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
  },
}
