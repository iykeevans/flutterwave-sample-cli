const Joi = require('joi');
const string = Joi.string().trim().required();

module.exports = Joi.object().keys({
	customer_firstname: string,
	customer_lastname: string,
	customer_email: string.email(),
	amount: Joi.number().positive().required(),
});
