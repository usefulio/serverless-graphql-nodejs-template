const _ = require('lodash');

// The following data fetching functions
// are specific to ElasticSearch and a theoretical index, 
// if you're not using ElasticSearch, create and export
// your own functions that talk to the data store
// you care about.
const es = require('./connectors/elasticSearch');

function getOverview(args) {
  return es.count({
    index: 'invocation_metrics',
    type: 'invocation_metric',
    body: {
      query: { 
        match: { 
          serviceId: args.serviceId
        } 
      } 
    }
  }).then(function(result) {
    return {
      invocations: result.count
    }
  });
}

function getCustomersOverview(args) {
  return es.search({
    index: 'invocation_metrics',
    type: 'invocation_metric',
    body: {
      size: 0,
      query: {
        match: { serviceId: args.serviceId }
      },
      aggs: {
        customerIdentifier: {
          terms: { field: "customerIdentifier" },
          aggs: {
            durationInMs: {
              stats: { field: "durationInMs" }
            },
            requestSizeInBytes: {
              stats: { field: "requestSizeInBytes" }
            },
            responseSizeInBytes: {
              stats: { field: "responseSizeInBytes" }
            }
          }
        }
      }
    }
  }).then(function(result) {
    return _.map(result.aggregations.customerIdentifier.buckets, function(bucket){
      return {
        customerIdentifier: bucket.key,
        count: bucket.doc_count,
        durationInMs: bucket.durationInMs,
        responseSizeInBytes: bucket.responseSizeInBytes,
        requestSizeInBytes: bucket.requestSizeInBytes
      };
    });
  })
}

module.exports = {
  getOverview,
  getCustomersOverview
};