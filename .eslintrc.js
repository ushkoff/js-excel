module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'indent': 'off',
    'semi': 'off',
    'linebreak-style': 'off',
    'max-len': 'off',
    'require-jsdoc': 'off',
    'comma-dangle': 'off',
    'eol-last': 'off',
    'no-trailing-spaces': 'off',
    'arrow-parens': 'off',
    'operator-linebreak': 'off'
  },
}
