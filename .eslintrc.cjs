module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: { react: { version: 'detect' }, tailwindcss: { cssFiles: ['src/index.css'] } },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-first-prop-new-line': [
      2,
      'multiline',
    ],
    'react/jsx-max-props-per-line': [
      2,
      { maximum: 1, when: 'multiline' },
    ],
    'react/jsx-indent-props': [
      2,
      2,
    ],
    'react/no-unescaped-entities': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'no-console': 2,
    'array-bracket-newline': [
      'error',
      { multiline: true },
    ],
    'array-bracket-spacing': [
      'error',
      'always',
      {
        objectsInArrays: false,
        arraysInArrays: false,
      },
    ],
    'array-element-newline': [
      'error',
      { ArrayExpression: 'consistent' },
    ],
    'arrow-body-style': [
      'error',
      'as-needed',
    ],
    'arrow-parens': [
      'error',
      'always',
    ],
    'arrow-spacing': 'error',
    'block-scoped-var': 'error',
    'block-spacing': 'error',
    'brace-style': [
      'error',
      '1tbs',
      { allowSingleLine: true },
    ],
    camelcase: 'off',
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'comma-spacing': [
      'error',
      { before: false, after: true },
    ],
    'comma-style': [
      'error',
      'last',
    ],
    'computed-property-spacing': [
      'error',
      'never',
    ],
    curly: 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-location': [
      'error',
      'property',
    ],
    eqeqeq: [
      'error',
      'smart',
    ],
    'func-call-spacing': [
      'error',
      'never',
    ],
    'function-call-argument-newline': [
      'error',
      'consistent',
    ],
    'function-paren-newline': [
      'error',
      'multiline-arguments',
    ],
    'implicit-arrow-linebreak': [
      'error',
      'beside',
    ],
    indent: [
      'error',
      2,
    ],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    /*
     * 'max-len': [
     *   'error',
     *   { code: 190, tabWidth: 2 },
     * ],
     */
    'max-statements': [
      'error',
      35,
    ],
    'max-statements-per-line': [
      'error',
      { max: 1 },
    ],
    'multiline-ternary': [
      'error',
      'never',
    ],
    'no-duplicate-imports': 'error',
    'no-lone-blocks': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-vars': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': [
      'error',
      'beside',
    ],
    'object-curly-newline': [
      'error',
      { multiline: true },
    ],
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: false,
        objectsInObjects: false,
      },
    ],
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true },
    ],
    'operator-linebreak': [
      'error',
      'before',
      {
        overrides: {
          '=': 'after',
          ':': 'after',
        },
      },
    ],
    'padded-blocks': [
      'error',
      'never',
    ],
    quotes: [
      'error',
      'single',
    ],
    'rest-spread-spacing': [
      'error',
      'never',
    ],
    semi: 'error',
    'semi-spacing': [
      'error',
      { before: false, after: true },
    ],
    'semi-style': 'error',
    'import/order': [
      'error',
      {
        'groups': [
          'index',
          'sibling',
          'parent',
          'internal',
          'external',
          'builtin',
          'object',
          'type',
        ],
        'alphabetize': { 'order': 'asc' },
      },
    ],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': [
      'error',
      'never',
    ],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': [
      'error',
      'always',
    ],
    'template-tag-spacing': 'error',
    'wrap-iife': [
      'error',
      'inside',
    ],
    'eol-last': [
      'warn',
      'always',
    ],
    'func-style': [
      'warn',
      'expression',
    ],
    'no-magic-numbers': 'off',
    'no-multi-spaces': 'warn',
    'no-multiple-empty-lines': [
      'warn',
      { max: 1, maxEOF: 0 },
    ],
    'require-await': 'warn',
    'template-curly-spacing': 'warn',
  },
};
