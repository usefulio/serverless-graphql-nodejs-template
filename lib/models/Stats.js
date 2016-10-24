const GraphQL = require('graphql');
const GraphQLNonNull = GraphQL.GraphQLNonNull;
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLInt = GraphQL.GraphQLInt;
const GraphQLFloat = GraphQL.GraphQLFloat;

const Stats = new GraphQLObjectType({
  name: 'Stats',
  description: "Mirrors the result of the ElasticSearch stats aggregation",
  fields: () => ({
    min: {
      type: GraphQLFloat
    },
    max: {
      type: GraphQLFloat
    },
    sum: {
      type: GraphQLFloat
    },
    avg: {
      type: GraphQLFloat
    },
    count: {
      type: GraphQLInt
    }
  })
})

module.exports = Stats;
