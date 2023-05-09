import { getBase64 } from '@contentpi/lib'
import jwt from 'jsonwebtoken'

import * as config from '~/config'

const {
  security: { secretKey }
} = config

export function jwtVerify(accessToken: string, cb: any) {
  jwt.verify(accessToken, secretKey, (error: any, accessTokenData: any = {}) => {
    const { data: user } = accessTokenData

    if (error || !user) {
      return cb(null)
    }

    const userData = getBase64(user)
    return cb(userData)
  })
}

export async function getUserData(accessToken: string): Promise<any> {
  const UserPromise = new Promise((resolve) => jwtVerify(accessToken, (user: any) => resolve(user)))

  const user = await UserPromise

  return user
}
