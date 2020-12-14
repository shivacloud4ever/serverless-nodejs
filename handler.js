// server.js
const { apikey } = require('./env-config');
const { region } = require('./env-config');
const { public_key } = require('./env-config');
const { private_key } = require('./env-config');
const { prefix } = require('./env-config');




'use strict';

module.exports.hello = async event => {
  console.log(`Your prefix is ${prefix}`); // 8626
  console.log(`Your apikey is ${apikey}`); // 8626
  console.log(`Your region is ${region}`); // 8626
  console.log(`Your pub key is ${public_key}`); // 8626
  console.log(`Your private key  is ${private_key}`); // 8626
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
      },
      null,
      2
    ),
  };
};
