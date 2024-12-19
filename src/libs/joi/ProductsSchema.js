import joi from "joi";

export const storeSchema = joi.object({}).keys({
  products_categories_id: joi.number().required(),
  user_id: joi.number().required(),
  name: joi.string().required(),
  brand: joi.string().required(),
  code: joi.string().required(),
  stock: joi.number().required(),
  status_id: joi.number().required(),
  price: joi.number().required(),
  photo: joi.string().required(),
});

export const updateSchema = joi.object({}).keys({
  products_categories_id: joi.number().required(),
  name: joi.string().required(),
  brand: joi.string().required(),
  code: joi.string().required(),
  photo: joi.string().required(),
});


export default { storeSchema, updateSchema };