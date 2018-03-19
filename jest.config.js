module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}", "!/node_modules/"],
  moduleFileExtensions: ["js", "jsx"],
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "\\.css$": "<rootDir>/mocks/styleMock.js"
  }
};
