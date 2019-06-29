import { numWord } from './numWord'

export function nthNumWord(n) {

  if (typeof n !== 'number') {
    console.error("TypeError: Remember to parse to numbers before using this function")
    return undefined
  }

  if (n % 1 !== 0) {
    console.error("NumError: Could not parse because number wasn't an integer")
    return undefined
  }

  if (n < 1) {
    console.error("NumError: Value must be positive and can't be zero")
    return undefined
  }

  if (10 > n && n > 0) {
    const singles = {
      1: 'first',
      2: 'second',
      3: 'third',
      4: 'fourth',
      5: 'fifth',
      6: 'sixth',
      7: 'seventh',
      8: 'eighth',
      9: 'ninth',
    }

    return singles[n]
  }

  if (20 > n && n > 9) {
    return `${numWord(n)}th`
  }

  if (100 > n && n > 19 && n % 10 === 0) {
    return numWord(n).split('').slice(0, numWord(n).length - 1).join('') + "ieth"
  }

  if (100 > n && n > 19 && n % 10 !== 0) {
      return `${numWord(parseInt(n.toString()[0] + "0"))}-${nthNumWord(parseInt(n.toString()[1]))}`
  }

  if (1000 > n && n % 100) {
    return "Please include more logic for larger numbers silly :)"
  }
}
