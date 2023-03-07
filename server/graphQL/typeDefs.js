const { gql } = require('apollo-server-express')

module.exports = gql`
type User {
  username: String
  password: String
}

type Query {
  users: [User]
}

type Mutation {
  addUser(username: String, password: String): User
}
`
// typeDefs select required data out of the entire data that was mapped out by resolvers
