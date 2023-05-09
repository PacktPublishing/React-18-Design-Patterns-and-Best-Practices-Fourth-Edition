import { gql } from '@apollo/client'

export default gql`
  query getUser($at: String!) {
    getUser(at: $at) {
      id
      email
      username
      role
      active
    }
  }
`
