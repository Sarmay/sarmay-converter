module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'prefer-const': 2,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-unused-expressions': 0,
    complexity: [1, 20],
    'max-len': [
      1,
      {
        code: 150,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreTemplateLiterals: true
      }
    ]
  }
}
