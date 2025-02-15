module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
  };
  