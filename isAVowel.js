import { isALetter } from "./isALetter";

export default function isAVowel(letter) {
  return isALetter(letter) && /[a,e,i,o,u]/.test(letter);
}
