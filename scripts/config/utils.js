exports.fieldsOfSchema = schema => Reflect.ownKeys(schema.describe().children);
