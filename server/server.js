
// Apollo & GraphQL
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./graphQL/typeDefs");
const resolvers = require("./graphQL/resolvers");

// express
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const path = require("path");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/db/connection");
const PORT = process.env.PORT || 3001;


// vroom_vroom-express-initialize
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

(async () => {
  // Start the Apollo server and apply the middleware to the express app
  await server.start();
  server.applyMiddleware({ app });

  // serve static assets in production
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
  }

  // connect to MongoDB Atlas and start the server
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      console.log(`
        ==============================
        "Online at ${PORT}, Server is."
                    __.-._
                    '-._"7'
                      /'.-c
                      |  /T
                    _)_/LI
        ==============================
      `);
    });
  });
})();