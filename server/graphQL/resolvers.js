const { Story, User } = require('../models');

const resolvers = {
  Query: {
    User: async () => {
      return User.find({});
    },
    Stories: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Story.find(params);
    },
  },
  
  Mutation: {
    createStoryBook: async (parent, args) => {
      const Story = await Story.create(args);
      return Story;
    },
  },
};

module.exports = resolvers;


//  resolvers check what data is in db