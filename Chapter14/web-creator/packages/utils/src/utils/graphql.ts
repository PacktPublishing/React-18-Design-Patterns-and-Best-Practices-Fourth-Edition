interface Error {
  error: boolean
  message: string
}

export function getGraphQlError(error: any): Error {
  return {
    error: true,
    message: error.toString().replace('Error: GraphQL error: ', '')
  }
}

type UseQueryParams = {
  apolloClient: any
  query: any
  skip?: boolean
  variables?: any
  fetchPolicy?: 'cache-first' | 'cache-and-network' | 'network-only' | 'cache-only' | 'no-cache'
}

export async function fetchQuery({
  apolloClient,
  fetchPolicy = 'cache-first',
  query,
  variables = {},
  skip = false
}: UseQueryParams) {
  if (!skip && apolloClient && query) {
    try {
      const queryParams = {
        query,
        variables,
        fetchPolicy
      }

      const { data } = await apolloClient.query(queryParams)

      return data
    } catch (error) {
      return error
    }
  }

  return {}
}
