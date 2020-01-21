const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    _id: { type: GraphQLID },
    name: { type: GraphQLString }
  }
});

module.exports = { userType };
