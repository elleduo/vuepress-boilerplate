const joi = require("@hapi/joi");
const { fieldsOfSchema } = require("./utils");

exports.schemaObj = {
  docsRepo: joi
    .string()
    .required()
    .description("repo of docs"),

  publishRepo: joi
    .string()
    .required()
    .description("repo for publishing"),
};

exports.fields = fieldsOfSchema(this.schemaObj);
