export function isALetter(letter) {
  if (typeof letter === 'string' && letter.length === 1 && /[A-Z,a-z]/.test(letter)) {
    return true
  } else return false
}
