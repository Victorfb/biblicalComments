module.exports = {
  env: {
    es6: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  settings: {
    reportUnusedDisableDirectives: true,
    'import/resolver': {
      'babel-plugin-root-import': { rootPathSuffix: 'src' },
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreanding': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
    'import/mp-unresolved': 'off',
    'react/destructuring-assignment': 'off',
    'import/no-cycle': 'off',
    camelcase: 'off',
  },
};
