import { makeExecutableSchema } from '@graphql-tools/schema'
import { ts } from '@web-creator/utils'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import bodyParser from 'body-parser'
import http from 'http'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import { applyMiddleware } from 'graphql-middleware'
import { json } from 'body-parser'

import { Service } from './types/config'

// Service
const service: any = process.env.SERVICE ?? 'default'

// Validating service
if (!ts.includes(Service, service)) {
  throw 'Invalid service'
}

// We are importing the service files dynamically
const resolvers = require(`./services/${service}/graphql/resolvers`).default
const typeDefs = require(`./services/${service}/graphql/types`).default
const models = require(`./services/${service}/models`).default
const seeds = require(`./services/${service}/seeds`).default

const app = express()
const httpServer = http.createServer(app)

const corsOptions = {
  origin: '*',
  credentials: true
}

app.use(cors(corsOptions))

app.use(cookieParser())
app.use(bodyParser.json())

// CORS
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// Schema
const schema = applyMiddleware(
  makeExecutableSchema({
    typeDefs,
    resolvers
  })
)

// Apollo Server
const apolloServer = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
})

// Database Sync
const main = async () => {
  const alter = true
  const force = false

  await apolloServer.start()
  await models.sequelize.sync({ alter, force })

  // Setting up initial seeds
  console.log('Initializing Seeds...')
  seeds()

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(apolloServer, {
      context: async () => ({ models })
    })
  )

  await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve))
  console.log(`🚀 Server ready at http://localhost:4000/graphql`)
}

main()
