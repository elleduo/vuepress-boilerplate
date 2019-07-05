const joi = require("@hapi/joi");
const { schema: vuepressScheme } = require("./configs-vuepress");
const { fieldsOfSchema } = require("./utils");

exports.schema = vuepressScheme.keys({
  repo: joi
    .string()
    .required()
    .description("repo of docs"),
  branch: joi
    .string()
    .default("master")
    .description("brach of the repo of docs"),
});

exports.validate = options => {
  const { value, error } = this.schema.validate(options);
  if (error) {
    throw error;
  } else {
    return value;
  }
};

exports.fields = fieldsOfSchema(this.schema);
