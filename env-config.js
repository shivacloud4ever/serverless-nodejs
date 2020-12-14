// // env-config.js
// const dotenv = require('dotenv');
// dotenv.config();
// module.exports = {
//   apikey: process.env.apikey,
//   region: process.env.region,
//   public_key: process.env.public_key,
//   private_key: process.env.private_key,
//   prefix: process.env.prefix,

// };


// This way we encounter runtime execution alwasy and need this dotenv module and can't be under dev dependency anymore. so better choose first option.

// config.js 
// const dotenv = require('dotenv');
// const result = dotenv.config();
// if (result.error) {
//   throw result.error;
// }
// const { parsed: envs } = result;
// console.log(envs);
// module.exports = envs;