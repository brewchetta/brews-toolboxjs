import { isALetter } from "./isALetter";

export default function isAConsonant(letter) {
  return isALetter(letter) && !/[a,e,i,o,u]/.test(letter);
}
