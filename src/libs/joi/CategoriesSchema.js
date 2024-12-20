import joi from "joi";

export const storeSchema = joi.object({
  user_id: joi.number().required(),
  status_id: joi.number().required(),
  name: joi.string().required(),
});

export const updateSchema = joi.object({
  name: joi.string().required(),
});

export default { storeSchema, updateSchema };