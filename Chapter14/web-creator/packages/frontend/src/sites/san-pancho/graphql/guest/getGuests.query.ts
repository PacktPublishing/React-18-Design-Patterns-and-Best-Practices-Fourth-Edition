import { gql } from '@apollo/client'

export const getGuestsQuery = `
  getGuests {
    ... on GuestResponse {
      guests {
        id
        fullName
        email
        photo
        socialMedia
        location
        gender
        birthday
        note
      }
    }
    ... on Error {
      error {
        code
        message
      }
    }
  }
`

export default gql`
  query getGuests {
    ${getGuestsQuery}
  }
`
