const { userType } = require('../node_types');
const { GraphQLInt, GraphQLList } = require('graphql');
const UserService = require('../../services/userService');

// const UserQuery = {
//   type: userType,
//   args: {
//     id: { type: GraphQLInt }
//   },
//   resolve: (_, { id }) => {
//     const user = fakeDataBase.find(v => v.id === id);
//     if (!user) return { error: 'no user found' };
//     return user;
//   }
// };

const UsersQuery = {
  type: GraphQLList(userType),
  args: {},
  resolve: async () => {
    const userService = new UserService();
    const foo = await userService.getAll();
    console.log(foo);

    return [{ id: 1, name: 'fasfa' }];
  }
};

module.exports = { UsersQuery };
