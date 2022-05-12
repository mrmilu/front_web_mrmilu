/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  collectCoverage: false,
  collectCoverageFrom: ["packages/**/*.(ts|tsx)", "!src/**/*.d.ts", "!**/types/**/*.ts", "!**/dist/**", "!**/__tests__/utils/**"],
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["./testSetup.ts"],
  testEnvironment: "jsdom",
  coverageReporters: ["clover", "json", "json-summary", "lcov", "text"],
  transform: { "\\.[jt]sx?$": ["babel-jest", { configFile: "./babel_jest.js" }] },
  testPathIgnorePatterns: ["/node_modules/", "/__tests__/utils/"],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: -5
    }
  }
};
