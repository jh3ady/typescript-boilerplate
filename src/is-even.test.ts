import { describe, expect, test } from '@jest/globals'
import { isEven } from '~/is-even'

describe('isEven function', () => {
  test('should return true for even numbers', () => {
    expect(isEven(0)).toBe(true)
    expect(isEven(2)).toBe(true)
    expect(isEven(4)).toBe(true)
  })

  test('should return false for odd numbers', () => {
    expect(isEven(1)).toBe(false)
    expect(isEven(3)).toBe(false)
    expect(isEven(7)).toBe(false)
  })

  test('should return true for negative even numbers', () => {
    expect(isEven(-0)).toBe(true)
    expect(isEven(-2)).toBe(true)
    expect(isEven(-4)).toBe(true)
  })

  test('should return false for negative odd numbers', () => {
    expect(isEven(-1)).toBe(false)
    expect(isEven(-3)).toBe(false)
  })
})
