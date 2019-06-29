function parseNumberToWord(n) {

  singles = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8 : "eight",
    9 : "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    }

  tens = {
    20: "twenty",
    30: "thirty",
    40: "fourty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
  }

  if (n % 1 !== 0) {
    console.error("NumError: Could not parse because number wasn't an integer")
    return undefined
  }

  if (n < 1) {
    console.error("NumError: Value must be positive and can't be zero")
    return undefined
  }

  if (20 > n && n > 0) {
    return singles[n]
  }

  if (100 > n && n > 19 && n % 10 === 0) {
    return tens[n]
  }

  if (100 > n && n > 19 && n % 10 !== 0) {
    return `${tens[parseInt(n.toString()[0] + "0")]}-${singles[parseInt(n.toString()[1])]}`
  }

}

function nthNumber(n) {

  if (typeof n !== 'number') {
    console.error("TypeError: Remember to parse to numbers before using nthNumber()")
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
    return `${parseNumberToWord(n)}th`
  }

  if (100 > n && n > 19 && n % 10 === 0) {
    return parseNumberToWord(n).split('').slice(0, parseNumberToWord(n).length - 1).join('') + "ieth"
  }

  if (100 > n && n > 19 && n % 10 !== 0) {
      return `${parseNumberToWord(parseInt(n.toString()[0] + "0"))}-${nthNumber(parseInt(n.toString()[1]))}`
  }

  if (1000 > n && n % 100) {
    return "Please include more logic for larger numbers"
  }
}

// End of actual functions

// Tester functions
function parseAllNumbers(m,n) {
  console.log('---Parse All Numbers to Words---')

  for (let i = m; i < n; i++) {
    console.log(parseNumberToWord(i))
  }

  console.log('---END Parse All Numbers to Words---')
}

function parseAllNthNumbers(m,n) {
  console.log('---Parse All Nth Numbers---')

  for (let i = m; i < n; i++) {
    console.log(nthNumber(i))
  }

  console.log('---END Parse All Nth Numbers---')
}

parseAllNumbers(1,20)
parseAllNthNumbers(1,20)
