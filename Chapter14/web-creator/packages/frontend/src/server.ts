import cookieParser from 'cookie-parser'
import express, { Application, NextFunction, Request, Response } from 'express'
import nextJS from 'next'
import path from 'path'
import { ts } from '@web-creator/utils'

import Config from './config'
import { isConnected } from './lib/middlewares/user'

import { Site } from './types/config'

// Site
const site: string = process.env.SITE ?? 'blank-page'

// Validating service
if (!ts.includes(Site, site)) {
  throw 'Invalid site'
}

// Setting up Next App
const { hostname } = Config
const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = nextJS({ dev, hostname, port })
const handle = nextApp.getRequestHandler()

// Running Next App
nextApp.prepare().then(() => {
  // Express application
  const app: Application = express()

  // Cookies
  app.use(cookieParser())

  // Sites static directories
  app.use(express.static(path.join(__dirname, '../public')))
  app.use(express.static(path.join(__dirname, `./sites/${Config.site}/static`)))

  // Custom Routes
  app.get('/logout', (req: Request, res: Response) => {
    const redirect: any = req.query.redirectTo || '/'
    res.clearCookie(`at-${Config.site}`)
    res.redirect(redirect)
  })

  app.get(
    '/dashboard',
    isConnected(true, ['god', 'admin', 'editor'], '/login?redirectTo=/dashboard'),
    (req: Request, res: Response, next: NextFunction) => next()
  )

  // Traffic handling
  app.all('*', (req: Request, res: Response) => handle(req, res))

  // Listening...
  app.listen(3000)
})
