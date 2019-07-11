export function compareAlphabetical(a, b) {
  return a > b ? -1 : a < b ? 1 : 0;
}

export function sortAlphabetical(array) {
  array.sort(compareByAlphabetical);
}
