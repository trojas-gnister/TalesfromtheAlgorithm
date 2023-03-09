const { gql } = require('apollo-server-express');
const typeDefs = gql`
<<<<<<< HEAD
type User {
  username: String
  password: String
}
type Query {
  users: [User]
}
type Mutation {
  addUser(username: String, password: String): User
  updateUser(id: ID!, username: String, password: String): User
  deleteUser(id: ID!): User
}
`
=======
  type User {
    _id: ID!
    username: String!
    password: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    users: [User!]!
    me: User
  }

  type Mutation {
    register(username: String, password: String!): AuthPayload!
    login(username: String!, password: String!): AuthPayload!
  }
`;

>>>>>>> c5ce9d5ac88293c3ad04a0c2252fdb750761b9c6
module.exports = typeDefs;

