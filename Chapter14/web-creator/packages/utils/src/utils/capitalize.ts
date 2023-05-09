import is from './is'

export function capitalize(str: string): string {
  if (!is.String(str)) {
    return ''
  }

  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function ucwords(str: string): string {
  if (!is.String(str)) {
    return ''
  }

  const exclude = ['de', 'la', 'el', 'y', 'a', 'e', 'o', 'u', 'i']

  return str
    .split(' ')
    .map((word) => (exclude.includes(word) ? word : capitalize(word)))
    .join(' ')
}
