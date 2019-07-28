import capitalizeWords from "./capitalizeWords";
import compareAlphabetical from "./compareAlphabetical";
import sortAlphabetical from "./sortAlphabetical";
import isAConsonant from "./isAConsonant";
import isALetter from "./isALetter";
import isAVowel from "./isAVowel";
import nthNumWord from "./nthNumWord";
import numWord from "./numWord";
import random from "./random";
import stringToColor from "./stringToColor";

export {
  capitalizeWords,
  compareAlphabetical,
  isAVowel,
  isAConsonant,
  isALetter,
  nthNumWord,
  numWord,
  random,
  stringToColor
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
exports.stringToColor = stringToColor;

export default exports;
