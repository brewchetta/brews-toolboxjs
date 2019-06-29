import { isALetter } from './isALetter'

export function isAConsonant(letter) {
  return isALetter(letter) && !/[a,e,i,o,u]/.test(letter)
}
