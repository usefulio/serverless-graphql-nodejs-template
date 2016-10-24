const GraphQL = require('graphql');
const GraphQLNonNull = GraphQL.GraphQLNonNull;
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLInt = GraphQL.GraphQLInt;
const GraphQLFloat = GraphQL.GraphQLFloat;

const Stats = require('./Stats');

const CustomerOverview = new GraphQLObjectType({
  name: 'CustomerOverview',
  description: "Provides an usage overview of the customers usage for a given service over a given period of time.",
  fields: () => ({
    customerIdentifier: {
      type: GraphQLString
    },
    count: {
      type: GraphQLFloat
    },
    durationInMs: {
      type: Stats
    },
    responseSizeInBytes: {
      type: Stats
    },
    requestSizeInBytes: {
      type: Stats
    }
  })
})

module.exports = CustomerOverview;
