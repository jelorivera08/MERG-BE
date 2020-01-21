const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { UsersQuery } = require('./query/UserQuery');
const {
  UserCreate,
  UserDelete,
  UserUpdate
} = require('./mutation/UserMutation');

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    users: UsersQuery
  })
});
2;
const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    //   userCreate: UserCreate,
    //   userDelete: UserDelete,
    //   userUpdate: UserUpdate
  })
});

const schema = new GraphQLSchema({ query: QueryType });
//mutation: MutationType
module.exports = schema;
