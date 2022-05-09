/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  collectCoverage: true,
  collectCoverageFrom: ["packages/**/*.(ts|tsx)", "!src/**/*.d.ts", "!**/types/**/*.ts", "!**/dist/**"],
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["./testSetup.ts"],
  testEnvironment: "jsdom",
  coverageReporters: ["clover", "json", "json-summary", "lcov", "text"]
};
