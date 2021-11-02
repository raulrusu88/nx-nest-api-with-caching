import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
  PORT: Joi.number().default(3333),
  PG_USERNAME: Joi.string().required(),
  PG_PASSWORD: Joi.string().required(),
  PG_PORT: Joi.number().required(),
  PG_DATABASE: Joi.string().required(),
  PG_HOST: Joi.string().required(),
});
