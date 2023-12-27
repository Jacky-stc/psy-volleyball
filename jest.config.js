module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    // https://jestjs.io/docs/webpack#mocking-css-modules
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.jsx$": "babel-jest",
  },
};
