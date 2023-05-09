export function googleContactIdToUUID(str: string): string {
  const has15 = str.length === 15
  let fill = ''
  const end = has15 ? 3 : 4

  if (has15) {
    fill += '0'
  }

  const firstChunk = `${fill}${str.slice(0, end)}`
  const secondChunk = str.slice(end, 16)
  // c7dcab78a2d49c0  -> 00000000-0000-0000-0c7d-cab78a2d49c0
  // 18d5a46c88196fb1 -> 00000000-0000-0000-18d5-a46c88196fb1
  return `00000000-0000-0000-${firstChunk}-${secondChunk}`
}

export function uuidToGoogleContactId(uuid: string): string {
  const newUuid = uuid.replace('00000000-0000-0000-', '')
  const [firstChunk, secondChunk] = newUuid.split('-')

  if (firstChunk[0] === '0') {
    return `${firstChunk.substring(1)}${secondChunk}`
  }

  return `${firstChunk}${secondChunk}`
}

export function isUUID(uuid = '') {
  if (!uuid) {
    return false
  }

  const parts = uuid.split('-')

  if (parts.length !== 5) {
    return false
  }

  const firstChunk = parts[0].length === 8
  const secondChunk = parts[1].length === 4
  const thirdChunk = parts[2].length === 4
  const fourthChunk = parts[3].length === 4
  const fifthChunk = parts[4].length === 12

  return firstChunk && secondChunk && thirdChunk && fourthChunk && fifthChunk
}
