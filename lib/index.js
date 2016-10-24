'use strict';

const graphql = require('graphql').graphql;
const Schema = require('./glue/Schema');

function resolve(query, variables, operationName){
  return graphql(Schema, query, null, null, variables, operationName);
};

module.exports = {
  resolve: resolve,
  Schema
};
