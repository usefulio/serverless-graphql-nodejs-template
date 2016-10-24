'use strict';

require('dotenv').config();

const resolve = require('./lib').resolve;

const graphql = function(event, context, cb) {

  const query = event.body.query;
  const variables = event.body.variables && typeof event.body.variables === 'string' ? JSON.parse(event.body.variables) : event.body.variables;
  const operationName = event.body.operationName;

  resolve(query, variables, operationName)
    .then(function(response) {
      return cb(null, response);
    }).catch(function(error) {
      return cb(error);
    });

};

module.exports.graphql = graphql;
