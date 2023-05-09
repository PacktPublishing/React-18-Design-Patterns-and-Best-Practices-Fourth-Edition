import cookieParser from 'cookie-parser'
import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { resolve } from 'path'

import * as config from '../config'
import html from './html'
import { isConnected } from './lib/middlewares/user'

// Express application
const app: Application = express()
const distDir = resolve('dist')
const staticDir = resolve('src', 'static')

// Middlewares
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(cookieParser(config.security.secretKey))
app.use(cors({ credentials: true, origin: true }))

// Static directories
app.use(express.static(distDir))
app.use(express.static(staticDir))

// Routes
app.get('/login', isConnected(false), (req: Request, res: Response) => {
  res.send(html({ title: 'My Website' }))
})

app.get(`/logout`, (req: Request, res: Response) => {
  const redirect: any = req.query.redirectTo || '/'
  res.clearCookie('at')
  res.redirect(redirect)
})

app.get('*', (req: Request, res: Response) => {
  res.send(html({ title: 'My Website' }))
})

export default app
