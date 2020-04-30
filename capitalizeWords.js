export default function capitalizeWords(string) {
  if (typeof string !== "string" || string.length === 0) return undefined;

  if (string.includes(" ")) {
    return string
      .split(" ")
      .map(word => capitalizeWords(word))
      .join(" ");
  } else {
    return string[0].toUpperCase() + string.slice(1);
  }
}
