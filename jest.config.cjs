// jest.config.cjs
/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        preprocess: true,
      },
    ],
  },
  moduleFileExtensions: ['ts', 'js', 'svelte'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverageFrom: ['src/**/*.{ts,svelte}', '!src/**/*.d.ts'],
  testMatch: ['**/__tests__/**/*.test.ts', '**/*.test.ts'],
  clearMocks: true,
  restoreMocks: true,
};

module.exports = config;