This is a base template for writing a graphql
endpoint using Serverless that runs on AWS Lambda and NodeJS.

The example data source used here is an AWS hosted ElasticSearch
Service instance, but you could easily add code to pull from
DynamoDB, S3 or anywhere else.

ElasticSearch is used as the example because it's a bit more
complicated to get going than something like DynamoDB, so nice
to put some code out there.

Also, this is simple code, things like security, etc.
should be added based on your own individual use case.

Setup
=====

1. Have serverless version 1.0.0-rc.2 or higher installed.
2. Run `npm init` in this directory.
3. Replace 'graphql-service' in `package.json` and `serverless.yml` with your service's name if you want.
4. Make sure you have a proper aws profile set up in your `~/.aws/credentials` and set the name in `serverless.yml`.

Quick Debugging
===============

After you have deployed once (to create the `.env` file), you can
run the `./loadLocally` bash script to get a node repl where
`gql` is your loaded package for the `/lib` directory. This serves
as a quick way to catch syntax errors, etc and play with your code
without having to wait for it to deploy to AWS.

Deployment
==========

`sls deploy -s <stage>`

Environment Variables
=====================

The `serverless.yml` file contains a `custom` block
with a `writeEnvVars` section which sets the enviroment
variables for this service's lambdas when they run.

IAM Role Statements
===================

Here are some basic statements you can add for
common use cases. Note that the `iamRoleStatements.json`
file is an array, that you place the following
type of objects into.


_Call Any Other Lambda in the Same AWS Account_
```json
{
  "Effect": "Allow",
  "Action": [
    "lambda:InvokeFunction"
  ],
  "Resource": "*"
}
```

_Do Anything with any DynamoDB Table in the Same AWS Account_
```json
{
  "Effect": "Allow",
  "Action": [
    "dynamodb:*"
  ],
  "Resource": "*"
}
```

_Do Anything with S3 in the Same AWS Account_
```json
{
  "Effect": "Allow",
  "Action": [
    "s3:*"
  ],
  "Resource": "*"
}
```