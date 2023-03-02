const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Story {
    _id: ID!
    title: String!
    text: String!
  }

  type Query {
    story: [Story]
    getStory(_id: String): Story
  }

  type Mutation {

  }
`;
module.exports = typeDefs;
