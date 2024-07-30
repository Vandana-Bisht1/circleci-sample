module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    testMatch: ['<rootDir>/src/**/*.test.tsx', '<rootDir>/src/**/*.spec.tsx'],
    coverageDirectory: '<rootDir>/coverage',
    collectCoverage: true,
    reporters: [
      'default',
      ['jest-junit', {
        outputDirectory: 'test-results',
        outputName: 'junit.xml',
      }],
    ],
  };
  