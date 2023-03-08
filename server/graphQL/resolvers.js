const { User } = require("../models");

module.exports = {
  Query: {
    users: () => User.find(),
  },
  Mutation: {
    addUser: async (_, { username, password }) => {
      const user = new User({ username, password });
      await user.save();
      return user;
    },
  },
};

//  resolvers check what data is in db
