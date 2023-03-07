const { ApolloServer } = require("apollo-server");
const { ApolloServerExPress } = require("apollo-server-express");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen()
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  })
  .catch((error) => {
    console.log("Error starting server: ", error);
  });