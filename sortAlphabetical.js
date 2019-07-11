import { compareAlphabetical } from "./compareAlphabetical";

export function sortAlphabetical(array) {
  [...array].sort(compareAlphabetical);
  return array;
}
