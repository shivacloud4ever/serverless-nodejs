// server.js
const { apikey } = require('./env-config');
const { region } = require('./env-config');

console.log(`Your apikey is ${apikey}`); // 8626
console.log(`Your region is ${region}`); // 8626


'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};
