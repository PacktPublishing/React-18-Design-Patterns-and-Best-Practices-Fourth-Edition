import { DocumentNode, OperationVariables, QueryResult, useQuery } from '@apollo/client'
import React, { FC } from 'react'

type ApolloConnectorProps = {
  query: DocumentNode
  variables?: Record<string, any>
  onSuccess: (data: any) => any
  props?: any
  serverData?: any
}

const ApolloConnector: FC<ApolloConnectorProps> = ({
  query,
  variables = {},
  onSuccess,
  props = {},
  serverData
}) => {
  const queryOptions: OperationVariables = {
    variables: {
      ...variables
    },
    errorPolicy: 'all'
  }

  const { data, error }: QueryResult = useQuery(query, queryOptions)

  if (error) {
    console.log({ error })
  }

  if (data) {
    return onSuccess({ data, ...props })
  }

  if (serverData) {
    return onSuccess({ data: serverData, ...props })
  }

  return <div />
}

export default ApolloConnector
