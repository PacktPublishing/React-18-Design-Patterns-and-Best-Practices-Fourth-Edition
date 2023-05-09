import gql from 'graphql-tag'

export default gql`
  type ErrorResponse {
    code: Int
    message: String!
  }
  type Error {
    error: ErrorResponse
  }
`
