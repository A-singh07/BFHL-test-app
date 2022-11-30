module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  plugins: ['react', 'react-native'],
  parseOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    'react-native/react-native': true,
  }
};
