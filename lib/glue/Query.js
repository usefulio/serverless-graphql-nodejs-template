const GraphQL = require('graphql');
const GraphQLID = GraphQL.GraphQLID;
const GraphQLList = GraphQL.GraphQLList;
const GraphQLNonNull = GraphQL.GraphQLNonNull;
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLInt = GraphQL.GraphQLInt;
const GraphQLFloat = GraphQL.GraphQLFloat;
const GraphQLEnumType = GraphQL.GraphQLEnumType;
const GraphQLSchema = GraphQL.GraphQLSchema;

//================
// Resolve Functions
//

const Repository = require('./Repository');

//================
// Data Objects
//

const Overview = require('../models/Overview');
const CustomerOverview = require('../models/CustomerOverview');

//================
// Query Builder
//

module.exports = new GraphQLObjectType({
  name: 'RootQueries',
  fields: () => ({
    overview: {
      type: Overview,
      args: {
        serviceId: {
          type: new GraphQLNonNull(GraphQLString)
        },
        startDate: {
          type: new GraphQLNonNull(GraphQLString)
        },
        endDate: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (source, args) => Repository.getOverview(args)
    },
    customersOverview: {
      type: new GraphQLList(CustomerOverview),
      args: {
        serviceId: {
          type: new GraphQLNonNull(GraphQLString)
        },
        startDate: {
          type: new GraphQLNonNull(GraphQLString)
        },
        endDate: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (source, args) => Repository.getCustomersOverview(args)
    }
  })
});
