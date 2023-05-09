import is from './is'

const base64 = {
  get(value: string) {
    let buffer = ''

    if (is.String(value)) {
      buffer = Buffer.from(value, 'base64').toString('ascii')
    }

    if (is.JSON(buffer)) {
      buffer = JSON.parse(Buffer.from(value, 'base64').toString('ascii'))
    }

    return buffer
  },
  set(value: any) {
    if (is.Object(value)) {
      return Buffer.from(JSON.stringify(value)).toString('base64')
    }

    return is.String(value) ? Buffer.from(value).toString('base64') : null
  }
}

export default base64
