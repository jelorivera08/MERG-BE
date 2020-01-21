const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  }
});

module.exports = { userType };
