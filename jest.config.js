module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  setupFilesAfterEnv: ['jest-enzyme', '<rootDir>/setupTests.ts'],
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
    '.+\\.scss$': 'jest-transform-css',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  setupFiles: ['raf/polyfill'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testRegex: '.spec.(ts|tsx)$',
  moduleNameMapper: {
    '.+\\.(css|less|sass|scss)$': 'jest-transform-css',
  },
};
