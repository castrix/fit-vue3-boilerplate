/* eslint-disable no-undef */
module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+.vue$': 'vue-jest',
    '^.+\\.(svg|png|jpg|jpeg)$': '<rootDir>/fileTransformer.js'
  },
  moduleFileExtensions: ['ts', 'js', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
  // setupFilesAfterEnv: ['<rootDir>/specs/jest.setup.ts']
}
