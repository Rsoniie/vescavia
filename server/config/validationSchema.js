import Joi from "joi";

const schema = {
  testing: Joi.object().keys({}),
  "email-service-schema": Joi.object().keys({}),
};

var validationSchema = function (type, body) {
  return schema[type].validate(body, {
    abortEarly: true,
    allowUnknown: true,
  });
};

export { validationSchema, schema };
