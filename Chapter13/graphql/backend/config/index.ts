// Dependencies
import dotenv from 'dotenv'

// Configuration
import config from './config.json'

// Loading .env vars
dotenv.config()

// Types
type Db = {
  dialect: string
  host: string
  port: string
  database: string
  username: string
  password: string
}

type Security = {
  secretKey: string
  expiresIn: string
}

type Server = {
  port: number
}

const db: Db = {
  dialect: process.env.DB_DIALECT || '',
  port: process.env.DB_PORT || '',
  host: process.env.DB_HOST || '',
  database: process.env.DB_DATABASE || '',
  username: process.env.DB_USERNAME || '',
  password: process.env.DB_PASSWORD || ''
}

// Configuration
const { security, server } = config

export const $db: Db = db
export const $security: Security = security
export const $server: Server = server
