import { makeExecutableSchema } from '@graphql-tools/schema'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import cors from 'cors'
import http from 'http'
import express from 'express'
import { applyMiddleware } from 'graphql-middleware'
import { json } from 'body-parser'

import { $server } from '../config'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/types'
import models from './models'

const app = express()
const httpServer = http.createServer(app)

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
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
})

const main = async () => {
  const alter = true
  const force = false

  await apolloServer.start()

  await models.sequelize.sync({ alter, force })

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(apolloServer, {
      context: async () => ({ models })
    })
  )

  await new Promise<void>((resolve) => httpServer.listen({ port: $server.port }, resolve))
  console.log(`🚀 Server ready at http://localhost:${$server.port}/graphql`)
}

main()
