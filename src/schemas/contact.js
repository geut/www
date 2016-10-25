import Joi from 'joi';

const schema = Joi.object().keys({
    honeypot: Joi.any().valid(''),
    _token: Joi.string().required(),
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    company: Joi.string().allow(''),
    comment: Joi.string().required()
});

export default schema;
