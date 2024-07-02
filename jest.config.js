/* eslint-disable */

/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: [
    "lcov",
    "text",
    "cobertura",
    "json-summary",
    "text-summary",
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    "^@google/model-viewer$": "<rootDir>/__mocks__/emptyMock.js",
    "\\.(glb|hdr)$": "<rootDir>/__mocks__/emptyMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css)$": "<rootDir>/__mocks__/styleMock.js",
  },
  modulePathIgnorePatterns: ["<rootDir>/build/"],
  preset: "ts-jest",
  snapshotResolver: "<rootDir>/jest.snapshotResolve.js",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transformIgnorePatterns: ["/node_modules/(?!(swiper))/"],
  transform: {
    "^.+\\.(js)?$": require.resolve("babel-jest"),
  },
};
