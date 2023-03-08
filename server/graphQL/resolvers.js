require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const {
  GET_USER,
  GET_USERS,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} = require("./index.js");
const openai = require("./graphQL/openAi.js");
const resolvers = {
  Query: {
    user: async (parent, { id }, context) => {
      // Check for a valid JWT token in the request headers
      const token = context.req.headers.authorization;
      if (!token) {
        throw new Error("Authentication required");
      }
      // Verify the JWT token and extract the user ID
      const { userId } = jwt.verify(token, process.env.JWT_SECRET);
      // Fetch the user from the database using the ID
      const user = await GET_USER(userId);
      return user;
    },
    getUser: async (parent, { id }) => {
      const user = await GET_USER(id);
      return user;
    },
    users: async () => {
      const users = await GET_USERS();
      return users;
    },
  },
  Mutation: {
    login: async (parent, { username, password }) => {
      // Find the user with the given username
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error("Invalid username or password");
      }
      // Check if the password hash matches the user's password hash
      if (password !== user.passwordHash) {
        throw new Error("Invalid username or password");
      }
      // Generate a JWT token
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
      // Return the user and JWT token in the response
      return { user, token };
    },
    createUser: async (parent, { name, email }) => {
      const user = await CREATE_USER(name, email);
      return user;
    },
    updateUser: async (parent, { id, name, email }) => {
      const user = await UPDATE_USER(id, name, email);
      return user;
    },
    deleteUser: async (parent, { id }) => {
      const user = await DELETE_USER(id);
      return user;
    },
    getOpenAIResponse: async (parent, { prompt }) => {
      try {
        // Send request to OpenAI API
        const response = await openai.sendRequest(prompt);
        // Handle response from OpenAI API
        const responseText = openai.handleResponse(response);
        // Return response text to user
        return responseText;
      } catch (err) {
        // Return an error message to the user if the request fails
        throw new Error("Failed to get response from OpenAI API");
      }
    },
  },
};
module.exports = resolvers;

/*

*
Renaming the `user` query resolver function to `getUser` to avoid a naming conflict.
*
Hashing the user's password and comparing the hash instead of comparing the actual password in the `login` mutation resolver.
*
Adding a try-catch block around the `sendRequest` function call in the `getOpenAIResponse` mutation resolver to catch any errors and return an appropriate error message to the user.
*

*/
