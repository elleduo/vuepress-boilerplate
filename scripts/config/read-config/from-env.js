const { fields } = require("../configs-all");

exports.configFromEnv = () =>
  fields.reduce((config, key) => {
    return process.env[key] === undefined
      ? config
      : { ...config, key: process.env[key] };
  }, {});
