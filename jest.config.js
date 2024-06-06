/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    verbose: true,
    testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
    moduleFileExtensions: ["ts", "js", "json", "node"],
};