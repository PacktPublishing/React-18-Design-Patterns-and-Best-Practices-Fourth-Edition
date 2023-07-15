import { base64, is, security } from '@web-creator/utils'
import jwt from 'jsonwebtoken'

export const secretKey = 'W3bBu1ld3r'
export const expiresIn = '30d'

export const createToken = async (user: any): Promise<string[] | string> => {
  const { id, username, password, email, active, role } = user
  const token = base64.set(`${security.encrypt(secretKey)}${password}`)
  const userData = {
    id,
    username,
    email,
    active,
    token,
    role
  }

  const createTk = jwt.sign({ data: base64.set(userData) }, secretKey, {
    expiresIn
  })

  return Promise.all([createTk])
}

export const getUserBy = async (where: any, roles: string[], models: any): Promise<any> => {
  const user = await models.User.findOne({
    where,
    raw: true
  })

  if (user && roles.includes(user.role)) {
    return user
  }

  return null
}

export const authenticate = async (
  emailOrUsername: string,
  password: string,
  models: any
): Promise<any> => {
  const where = is.Email(emailOrUsername)
    ? { email: emailOrUsername }
    : { username: emailOrUsername }

  const user = await getUserBy(where, ['god', 'admin', 'editor', 'user'], models)

  if (!user) {
    throw new Error('Invalid Login')
  }

  const passwordMatch = is.PasswordMatch(security.encrypt(password), user.password)
  const isActive = user.active

  if (!passwordMatch) {
    throw new Error('Invalid Login')
  }

  if (!isActive) {
    throw new Error('Your account is not activated yet')
  }

  const [token] = await createToken(user)

  return {
    token
  }
}

export function jwtVerify(accessToken: string, cb: any): any {
  jwt.verify(accessToken, secretKey, (error: any, accessTokenData: any = {}) => {
    const { data: user } = accessTokenData

    if (error || !user) {
      return cb(false)
    }

    const userData = base64.get(user)

    return cb(userData)
  })

  return null
}

export async function getUserData(accessToken: any): Promise<any> {
  const UserPromise = new Promise((resolve) => jwtVerify(accessToken, (user: any) => resolve(user)))

  const user = await UserPromise

  return user
}
