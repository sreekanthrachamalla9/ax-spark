import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text', 'text-summary', 'lcov'],
  collectCoverageFrom: [
    "src/app/**/*.ts",
    "!src/main.ts",
    "!src/**/*.module.ts",
    "!src/environments/**",
  ],
  testMatch: ['**/*.spec.ts'],
};

export default config;
