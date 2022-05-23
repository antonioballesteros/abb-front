import { calculateSomethingRelatedWithLast10 } from '.'

describe('testing calculateSomethingRelatedWithLast10', () => {
  test('list is empty', () => {
    const listToString = JSON.stringify([])
    const result = calculateSomethingRelatedWithLast10(10, listToString)

    expect(result).toBeNull()
  })

  test('only one value, equal to nominal', () => {
    const listToString = JSON.stringify([10])
    const result = calculateSomethingRelatedWithLast10(10, listToString)

    expect(result).toBe(0)
  })

  test('more values, equal to nominal', () => {
    const listToString = JSON.stringify([10, 10])
    const result = calculateSomethingRelatedWithLast10(10, listToString)

    expect(result).toBe(0)
  })

  test('deviations are absolute values', () => {
    const listToString = JSON.stringify([5, 15])
    const result = calculateSomethingRelatedWithLast10(10, listToString)

    expect(result).toBe(5)
  })

  test('nominal 0 is not a problem', () => {
    const listToString = JSON.stringify([5])
    const result = calculateSomethingRelatedWithLast10(0, listToString)

    expect(result).toBe(5)
  })

  test('checking under 0', () => {
    const listToString = JSON.stringify([-5, -10])
    const result = calculateSomethingRelatedWithLast10(-10, listToString)

    expect(result).toBe(2.5)
  })
})
