module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ["./jest-setup.js"],
  transformIgnorePatterns: ['node_modules/(?!(jest-)?@?react-native|moti/.*)'],
};