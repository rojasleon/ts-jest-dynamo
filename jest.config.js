const tsPreset = require("ts-jest/jest-preset");
const dynalitePreset = require("jest-dynalite/jest-preset");

module.exports = {
  ...tsPreset,
  ...dynalitePreset,
  setupFiles: ["./src/test/setupBeforeEnv.ts"],
  setupFilesAfterEnv: ["./src/test/setupAfterEnv.ts"],
  testEnvironment: "node",
};
