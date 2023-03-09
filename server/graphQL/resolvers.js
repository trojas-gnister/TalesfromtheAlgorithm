const resolvers = {
  Mutation: {
    async login(_, { username, password }) {
      // query MongoDB for user with matching email and password
      const user = await User.findOne({ username, password });
      
      // if no user found, throw an error
      if (!user) {
        throw new Error('Invalid login credentials');
      }
      
      // generate a JSON Web Token for the user
      const token = generateToken(user);
      
      // return the token and user information as part of the response
      return { token, user };
    },
    
    async addUser(_, { username, password }) {
      // create a new user object
      const user = new User({ username, password });
      
      // save the user to MongoDB
      await user.save();
      
      // generate a JSON Web Token for the user
      const token = generateToken(user);
      
      // return the token and user information as part of the respon:se
      return { token, user };
    },
  },
};

