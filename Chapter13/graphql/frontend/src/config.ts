// Types
type API = {
  uri: string
}

type Security = {
  secretKey: string
  expiresIn: string
}

// Environment Configuration
export const isProduction: boolean = process.env.NODE_ENV === 'production'
export const isDevelopment: boolean = process.env.NODE_ENV !== 'production'

// Server Configuration
const devUrl = 'localhost'
const prodUrl = 'localhost' // change this to your production url

export const PORT: number = Number(process.env.PORT) || 3000
export const DEV_SERVER_PORT = 3001
export const GRAPHQL_PORT = 4000
export const GRAPHQL_SERVER = isDevelopment ? devUrl : prodUrl

// Paths Configuration
export const domain: string = devUrl
export const baseUrl: string = isProduction
  ? `https://${domain}:${PORT}`
  : `http://${domain}:${PORT}` // Remove port in production
export const publicPath: string = isProduction ? '' : `http://${domain}:${DEV_SERVER_PORT}/`

// API Configuration
export const api: API = {
  uri: `http://${GRAPHQL_SERVER}:${GRAPHQL_PORT}/graphql`
}

// Security Configuration
export const security: Security = {
  secretKey: process.env.SECURITY_SECRET_KEY || '',
  expiresIn: '7d'
}
