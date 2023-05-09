import crypto from 'crypto'
import { v4 as uuid } from 'uuid'

const security = {
  encrypt(str: string) {
    return crypto.createHash('sha1').update(str.toString()).digest('hex')
  },
  generateCode() {
    let code = ''
    let randomPoz
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    const max = 10

    for (let i = 0; i < max; i += 1) {
      randomPoz = Math.floor(Math.random() * charset.length)
      code += charset.substring(randomPoz, randomPoz + 1)
    }

    return code
  },
  uuid() {
    return uuid()
  },
  getRandomCode(max: number) {
    let code = ''
    let randomPoz
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    max = max || 12

    for (let i = 0; i < max; i += 1) {
      randomPoz = Math.floor(Math.random() * charset.length)
      code += charset.substring(randomPoz, randomPoz + 1)
    }

    return code
  }
}

export default security
