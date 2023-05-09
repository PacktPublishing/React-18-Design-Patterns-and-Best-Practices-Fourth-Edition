import gql from 'graphql-tag'

export default gql`
  type User {
    id: UUID!
    username: String!
    email: String!
    password: String!
    role: String!
    active: Boolean!
    createdAt: Datetime!
    updatedAt: Datetime!
  }

  type Query {
    getUser(at: String!): User!
    getUsers: [User!]
  }

  type Mutation {
    createUser(input: CreateUserInput): User!
    login(input: LoginInput): Token!
  }

  type Token {
    token: String!
  }

  input CreateUserInput {
    username: String!
    password: String!
    email: String!
    active: Boolean!
    role: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }
`
