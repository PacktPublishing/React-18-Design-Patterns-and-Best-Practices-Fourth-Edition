import { makeExecutableSchema } from '@graphql-tools/schema'
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'
import express from 'express'
import { applyMiddleware } from 'graphql-middleware'

import { $server } from '../config'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/types'
import models from './models'

const app = express()

const corsOptions = {
  origin: '*',
  credentials: true
}

app.use(cors(corsOptions))

app.use((req, res, next) => {
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
    models
  })
})

const alter = true
const force = false

models.sequelize.sync({ alter, force }).then(() => {
  apolloServer.start().then(() => {
    apolloServer.applyMiddleware({ app, path: '/graphql', cors: corsOptions })

    app.listen({ port: $server.port }, () => {
      // eslint-disable-next-line no-console
      console.log(`Running on http://localhost:${$server.port}/graphql`)
    })
  })
})
