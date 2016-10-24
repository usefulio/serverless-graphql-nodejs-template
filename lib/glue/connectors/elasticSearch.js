const Promise = require('bluebird');
const elasticsearch = require('elasticsearch');
const AWSESConnectionClass = require('http-aws-es');
const AWS = require('aws-sdk');
const credentials = new AWS.EnvironmentCredentials('AWS');

const esClient = new elasticsearch.Client({
  host: process.env.ELASTIC_SEARCH_ENDPOINT,
  log: 'trace',
  apiVersion: process.env.ELASTIC_SEARCH_VERSION,
  connectionClass: AWSESConnectionClass,
  amazonES: {
    region: process.env.ELASTIC_SEARCH_REGION,
    credentials: credentials
  },
  defer() {
    const defer = {};
    defer.promise = new Promise((resolve, reject) => {
      defer.resolve = resolve;
      defer.reject = reject;
    })
    return defer;
  }
});

module.exports = esClient;