function chunk(arr: any[], size = 1): any[] {
  return arr.length > size ? [arr.slice(0, size), ...chunk(arr.slice(size), size)] : [arr]
}

export default chunk
