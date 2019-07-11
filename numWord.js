export default function numWord(n) {
  if (typeof n !== "number") {
    console.error(
      "TypeError: Remember to parse to numbers before using this function"
    );
    return undefined;
  }

  if (n % 1 !== 0) {
    console.error("NumError: Could not parse because number wasn't an integer");
    return undefined;
  }

  if (n < 1) {
    console.error("NumError: Value must be positive and can't be zero");
    return undefined;
  }

  singles = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen"
  };

  if (20 > n && n > 0) {
    return singles[n];
  }

  tens = {
    20: "twenty",
    30: "thirty",
    40: "fourty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
  };

  if (100 > n && n > 19 && n % 10 === 0) {
    return tens[n];
  }

  if (100 > n && n > 19 && n % 10 !== 0) {
    return `${tens[parseInt(n.toString()[0] + "0")]}-${
      singles[parseInt(n.toString()[1])]
    }`;
  }
}
