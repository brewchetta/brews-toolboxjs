import compareAlphabetical from "./compareAlphabetical";

export default function sortAlphabetical(array) {
  [...array].sort(compareAlphabetical);
  return array;
}
