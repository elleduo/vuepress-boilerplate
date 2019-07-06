const joi = require("@hapi/joi");
const { fieldsOfSchema } = require("./utils");

exports.schemaObj = {
  title: joi.string(),
  description: joi.string(),
  base: joi.string(),
  head: joi.array(),
  theme: joi.string(),
  evergreen: joi.bool(),
};

exports.fields = fieldsOfSchema(this.schemaObj);
