import is from './is'
import keys from './keys'

function forEach(items: any, callback: any): any {
  if (!is.Defined(items)) {
    return false
  }

  if ((is.Defined(items) && is.Defined(items[0])) || is.Array(items)) {
    return items.forEach(callback)
  }

  return is.Object(items) ? keys(items).forEach(callback) : false
}

export default forEach
