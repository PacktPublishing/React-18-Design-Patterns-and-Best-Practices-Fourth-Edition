import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import fetch from 'isomorphic-fetch'

import Config from '../config'

let apolloClient: any

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      fetch,
      uri: Config.api.uri,
      credentials: 'same-origin'
    }),
    cache: new InMemoryCache()
  })
}

export function initializeApollo(initialState = null) {
  const client = apolloClient || createApolloClient()

  if (initialState) {
    client.cache.restore(initialState)
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') {
    return client
  }

  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = client
  }

  return client
}
