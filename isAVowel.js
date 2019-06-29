import { isALetter } from './isALetter'

export function isAVowel(letter) {
  return isALetter(letter) && /[a,e,i,o,u]/.test(letter)
}
