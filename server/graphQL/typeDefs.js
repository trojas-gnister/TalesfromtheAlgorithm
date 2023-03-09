const { gql } = require('apollo-server-express');

const typeDefs = gql`
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

module.exports = typeDefs;

