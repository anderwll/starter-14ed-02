export default {
  // Configura o Jest para testes no Node.js
  // usando Typescript.
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  // Informa o diretório onde os testes estarão contidos.
  roots: ["<rootDir>/tests"],
  setupFilesAfterEnv: ["<rootDir>/tests/config/prisma.mock.ts"],
  // Configurações de cobertura de código.
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
};
