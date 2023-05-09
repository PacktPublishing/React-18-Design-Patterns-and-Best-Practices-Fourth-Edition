import { makeExecutableSchema } from '@graphql-tools/schema'
import { ts } from '@web-creator/utils'
import { ApolloServer } from 'apollo-server-express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import { applyMiddleware } from 'graphql-middleware'

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
  context: async () => ({
    models // Here we are passing the models to the context
  })
})

// Database Sync
const alter = true
const force = false

models.sequelize.sync({ alter, force }).then(() => {
  apolloServer.start().then(() => {
    apolloServer.applyMiddleware({ app, path: '/graphql', cors: corsOptions })

    app.listen({ port: 4000 }, () => {
      // Setting up initial seeds
      console.log('Initializing Seeds...')
      seeds()

      // eslint-disable-next-line no-console
      console.log('Running on http://localhost:4000')
    })
  })
})
