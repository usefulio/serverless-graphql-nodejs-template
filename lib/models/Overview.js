const GraphQL = require('graphql');
const GraphQLNonNull = GraphQL.GraphQLNonNull;
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLInt = GraphQL.GraphQLInt;

const Overview = new GraphQLObjectType({
  name: 'Overview',
  description: "Provides an usage overview for a given service over a given period of time.",
  fields: () => ({
    invocations: {
      type: GraphQLInt
    }
  })
})

module.exports = Overview;
