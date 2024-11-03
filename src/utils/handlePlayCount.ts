export function handlePlayCount(count: number) {
  if (count > 100000) {
    return `${Math.ceil((count / 10000))}万`
  }
  else {
    return count
  }
}
