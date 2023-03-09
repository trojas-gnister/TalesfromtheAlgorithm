require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/db/connection');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai');
const { typeDefs, resolvers } = require('./schemas');

const PORT = process.env.PORT || 3001;

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// openai config
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_BUILD_ENV,
});

const openai = new OpenAIApi(configuration);

// openai route
app.get('/api/completion', async (req, res) => {
  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      temperature: 0.7,
      max_tokens: 256,
      prompt: 'Write me a fantasy story about STORYMAN. Make the story 2 sentences long.',
    });
    console.log(completion.data.choices[0].text);
    res.json({ text: completion.data.choices[0].text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// start Apollo server
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
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
};

startApolloServer(typeDefs, resolvers);
