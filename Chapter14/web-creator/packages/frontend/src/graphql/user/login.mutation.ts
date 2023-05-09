import { gql } from '@apollo/client'

export default gql`
  mutation login($emailOrUsername: String!, $password: String!) {
    login(input: { emailOrUsername: $emailOrUsername, password: $password }) {
      token
    }
  }
`
