import { isALetter } from './isALetter'

export function isAVowel(letter) {
  const vowels = ['a','e','i','o','u']
  return isALetter(letter) && vowels.includes(letter)
}
