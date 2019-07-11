export function random(list) {
  if (Array.isArray(list) || typeof list === "string") {
    return list[Math.floor(Math.random() * list.length)];
  }

  if (typeof list === "object") {
    const key = random(Object.keys(list));
    return { [key]: list[key] };
  }

  console.error(`TypeError: cannot select a random element from "${list}"`);
}
