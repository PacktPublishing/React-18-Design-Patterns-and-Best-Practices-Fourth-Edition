import is from './is'

function keys(obj: any): any[] {
  if (is.Object(obj)) {
    return Object.keys(obj)
  }

  return []
}

export default keys
