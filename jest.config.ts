import type { Config } from '@jest/types';
import { resolve } from 'path';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: "tsconfig.node.json",
    }],
  },
  verbose: true,
  setupFilesAfterEnv: [
    "<rootDir>/setupTests.ts"
  ],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    '\\.(svg|png)$': '<rootDir>/src/__mocks__/fileMock.js',
    '\\.(svg)\\?react$': '<rootDir>/src/__mocks__/fileMock.js',
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

export default config;
