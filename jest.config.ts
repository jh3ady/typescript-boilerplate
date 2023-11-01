import { type Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1'
  }
}

export default config
