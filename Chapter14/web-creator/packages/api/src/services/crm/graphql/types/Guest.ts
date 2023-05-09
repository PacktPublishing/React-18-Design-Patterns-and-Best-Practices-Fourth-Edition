import gql from 'graphql-tag'

export default gql`
  type Guest {
    id: UUID!
    fullName: String!
    email: String!
    photo: String!
    socialMedia: String!
    location: String!
    phone: String!
    gender: String!
    birthday: String
    createdAt: Datetime!
    updatedAt: Datetime!
  }

  type GuestResponse {
    guests: [Guest!]!
  }

  union GuestResult = GuestResponse | Error

  type Query {
    getGuests: GuestResult
  }
`
