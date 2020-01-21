const { userType } = require('../node_types');
const {
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql');

let fakeId = 1234;

const UserCreate = {
  type: userType,
  args: {
    name: { type: GraphQLString }
  },
  resolve: (_, { name }) => {
    const newUser = { id: fakeId++, name };
    fakeDataBase.push(newUser);

    return newUser;
  }
};

// const UserDelete = {
//   type: GraphQLBoolean,
//   args: {
//     id: { type: GraphQLInt }
//   },
//   resolve: (_, { id }) => {
//     const userIndex = fakeDataBase.findIndex(v => v.id === id);
//     if (userIndex >= 0) {
//       delete fakeDataBase[userIndex];
//       return true;
//     } else {
//       return false;
//     }
//   }
// };

// const UserUpdate = {
//   type: GraphQLBoolean,
//   args: {
//     id: { type: GraphQLInt },
//     name: { type: GraphQLString }
//   },
//   resolve: (_, { id, name }) => {
//     const userIndex = fakeDataBase.findIndex(v => v.id === id);
//     if (userIndex >= 0) {
//       fakeDataBase[userIndex].name = name;
//       return true;
//     } else {
//       return false;
//     }
//   }
// };

module.exports = { UserCreate };
