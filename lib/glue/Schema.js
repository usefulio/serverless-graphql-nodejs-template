const GraphQL = require('graphql');
const GraphQLSchema = GraphQL.GraphQLSchema;

const Query = require('./Query');

module.exports = new GraphQLSchema({
  query: Query
});
