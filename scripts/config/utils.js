const joi = require("@hapi/joi");

const isJoi =
  typeof joi.isSchema === "function" ? joi.isSchema : schema => !!schema.isJoi;

exports.fieldsOfSchema = schema =>
  Reflect.ownKeys(
    isJoi(schema)
      ? // joi schema
        schema.describe().children
      : // plain object
        schema,
  );
