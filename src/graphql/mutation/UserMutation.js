/* eslint-disable no-unused-vars */
const { userType } = require('../nodeTypes');
const {
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLID
} = require('graphql');
const UserService = require('../../services/userService');

const UserCreate = {
  type: userType,
  args: {
    name: { type: GraphQLString }
  },
  resolve: async (_, { name }) => {
    const userService = new UserService();
    const newUser = await userService.createUser({ name });

    return newUser;
  }
};

const UserDelete = {
  type: GraphQLBoolean,
  args: {
    _id: { type: GraphQLID }
  },
  resolve: async (_, { _id }) => {
    const userService = new UserService();
    const res = await userService.deleteUser(_id);

    if (res.ok) {
      return true;
    } else {
      return false;
    }
  }
};

const UserUpdate = {
  type: userType,
  args: {
    _id: { type: GraphQLID },
    name: { type: GraphQLString }
  },
  resolve: async (_, { _id, name }) => {
    const userService = new UserService();
    const updatedUser = await userService.updateUser(_id, { name });

    return updatedUser;
  }
};

module.exports = { UserCreate, UserUpdate, UserDelete };
