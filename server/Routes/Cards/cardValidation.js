const Joi = require("joi");

function validateCard(card) {
  const schema = Joi.object({
    title: Joi.string().min(2).max(256).required(),
    //default cards don't have subtitle
    subtitle: Joi.string().min(2).max(256),
    description: Joi.string().min(2).max(1024).required(),
    address: Joi.string().min(2).max(256).required(),
    phone: Joi.string().min(9).max(14).required(),
    url: Joi.string().min(6).max(1024),
    alt: Joi.string().min(2).max(256),
  });
  return schema.validate(card);
}

exports.validateCard = validateCard;
