const path = require('path');

// force timezone to UTC to allow tests to work regardless of local timezone
// generally used by snapshots, but can affect specific tests
process.env.TZ = 'UTC';

module.exports = {
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
    'react-inlinesvg': path.resolve(__dirname, 'mocks', 'react-inlinesvg.tsx'),
  },
  modulePaths: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test,jest}.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test,jest}.{js,jsx,ts,tsx}',
  ],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        sourceMaps: true,
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
            decorators: false,
            dynamicImport: true,
          },
        },
      },
    ],
  },
  transformIgnorePatterns: [],
};
