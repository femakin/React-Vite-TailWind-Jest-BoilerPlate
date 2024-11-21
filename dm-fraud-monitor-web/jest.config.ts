// module.exports = {
//   preset: "ts-jest",
//   setupFilesAfterEnv: ["./src/setupTests.ts"],
//   testEnvironment: "jsdom",
//   moduleNameMapper: {
//     "\\.(css|scss)$": "identity-obj-proxy", // Mock CSS imports
//   },
// };

export default {
  preset: "ts-jest",
  setupFilesAfterEnv: ["./src/setupTests.ts"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy", // Mock CSS imports
  },
};
