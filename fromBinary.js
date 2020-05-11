export default function fromBinary(string) {
  if (typeof string !== "string" || string.match(/[^1|0]/)) return undefined

  const binary = string.split("")

  let n = 1
  let sum = 0
  while (binary.length) {
    sum += parseInt(binary.pop()) * n
    n *= 2
  }

  return sum
}
