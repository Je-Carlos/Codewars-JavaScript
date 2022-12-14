function findShort(s) {
  let split = s.split(" ");
  let shortest = split[0].length;
  for (let i = 0; i < split.length; i++) {
    if (split[i].length < shortest) {
      shortest = split[i].length;
    }
  }
  return shortest;
}
