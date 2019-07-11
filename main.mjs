import { capitalizeWords } from "./capitalizeWords";
import { compareAlphabetical, sortAlphabetical } from "./compareAlphabetical";
import { isAConsonant } from "./isAConsonant";
import { isALetter } from "./isALetter";
import { isAVowel } from "./isAVowel";
import { nthNumWord } from "./nthNumWord";
import { numWord } from "./numWord";
import { random } from "./random";

export {
  capitalizeWords,
  compareAlphabetical,
  isAVowel,
  isAConsonant,
  isALetter,
  nthNumWord,
  numWord,
  random
};

let exports = {};

exports.capitalizeWords = capitalizeWords;
exports.compareAlphabetical = compareAlphabetical;
exports.sortAlphabetical = sortAlphabetical;
exports.isAConsonant = isAConsonant;
exports.isALetter = isALetter;
exports.isAVowel = isAVowel;
exports.nthNumWord = nthNumWord;
exports.numWord = numWord;
exports.random = random;

export default exports;
