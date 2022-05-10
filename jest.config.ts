/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  collectCoverage: false,
  collectCoverageFrom: ["packages/**/*.(ts|tsx)", "!src/**/*.d.ts", "!**/types/**/*.ts", "!**/dist/**"],
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["./testSetup.ts"],
  testEnvironment: "jsdom",
  coverageReporters: ["clover", "json", "json-summary", "lcov", "text"],
  transform: { "\\.[jt]sx?$": ["babel-jest", { configFile: "./babel_jest.js" }] },
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: -5
    }
  }
};
