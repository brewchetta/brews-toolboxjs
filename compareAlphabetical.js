export function compareByAlphabetical(a, b) {
  return a > b ? -1 : a < b ? 1 : 0;
}

export function sortByAlphabetical(array) {
  array.sort(compareByAlphabetical);
}
