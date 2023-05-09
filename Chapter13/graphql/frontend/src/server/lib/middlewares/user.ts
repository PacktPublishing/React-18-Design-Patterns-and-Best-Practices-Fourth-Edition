import { NextFunction, Request, Response } from 'express'

import { getUserData } from '../jwt'

export const isConnected =
  (isLogged = true, roles = ['user'], redirectTo = '/') =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const user = await getUserData(req.cookies.at)

    if (!user && !isLogged) {
      return next()
    }

    if (user && isLogged) {
      if (roles.includes('god') && user.privilege === 'god') {
        return next()
      }

      if (roles.includes('admin') && user.privilege === 'admin') {
        return next()
      }

      if (roles.includes('user') && user.privilege === 'user') {
        return next()
      }

      res.redirect(redirectTo)
    } else {
      res.redirect(redirectTo)
    }
  }
