const { userType } = require('../nodeTypes');
const { GraphQLList, GraphQLString } = require('graphql');
const UserService = require('../../services/userService');

const UserQuery = {
  type: userType,
  args: {
    _id: { type: GraphQLString }
  },
  resolve: async (_, { _id }) => {
    const userService = new UserService();
    const user = await userService.getUserById({ _id });

    return user;
  }
};

const UsersQuery = {
  type: GraphQLList(userType),
  args: {},
  resolve: async () => {
    const userService = new UserService();
    const users = await userService.getAllUsers();

    return users;
  }
};

module.exports = { UsersQuery, UserQuery };
