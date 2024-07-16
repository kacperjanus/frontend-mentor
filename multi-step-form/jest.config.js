/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
    "node_modules/@hyperjump/json-schema/.+\\.(j|t)sx?$": "ts-jest",
    "node_modules/@hyperjump/uri/.+\\.(j|t)sx?$": "ts-jest",
    "node_modules/@hyperjump/lib/.+\\.(j|t)sx?$": "ts-jest"
  },
  preset: "ts-jest",
  transformIgnorePatterns: [
    "node_modules/(?!@hyperjump/json-schema/.*)",
    "node_modules/(?!@hyperjump/uri/.*)",
    "node_modules/(?!@hyperjump/lib/.*)",
  ],
};