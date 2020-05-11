export default function toBinary(number) {
  let n = number
  if (typeof number !== "number" || number % 1 !== 0) return undefined;

  let binary = ""

  while (n > 0) {
    binary = n % 2 + binary
    n = Math.floor(n / 2)
  }

  return binary
}
