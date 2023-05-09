module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/setUpTests.ts'],
  testEnvironment: 'jsdom'
}
