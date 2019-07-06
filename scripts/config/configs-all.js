const joi = require("@hapi/joi");
const { schemaObj: vuepressSchemeObj } = require("./configs-vuepress");
const { schemaObj: setupSchemaObj } = require("./configs-setup");
const { fieldsOfSchema } = require("./utils");

exports.schema = joi
  .object()
  .keys(vuepressSchemeObj)
  .keys(setupSchemaObj);

exports.validate = options => {
  const { value, error } = this.schema.validate(options);
  if (error) {
    throw error;
  } else {
    return value;
  }
};

exports.fields = fieldsOfSchema(this.schema);
