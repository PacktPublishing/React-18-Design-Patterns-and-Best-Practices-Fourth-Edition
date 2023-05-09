import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { render } from 'react-dom'

import * as config from '../config'
import AppRoutes from './AppRoutes'

// Apollo Client configuration
const client = new ApolloClient({
  uri: config.api.uri,
  cache: new InMemoryCache()
})

render(
  <ApolloProvider client={client}>
    <AppRoutes />
  </ApolloProvider>,
  document.querySelector('#root')
)
