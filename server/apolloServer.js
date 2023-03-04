const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schemas/typeDefs");
const resolvers = require("./schemas/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

module.exports = server;
