export function getImageSize(imgUrl: string, width = 40) {
  const height = width || 40
  return `${imgUrl}?param=${width}x${height}`
}
