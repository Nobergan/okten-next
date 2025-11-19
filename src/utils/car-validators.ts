import * as Joi from "joi";

export const carValidators = Joi.object({
  brand: Joi.string()
    .pattern(new RegExp("^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$"))
    .messages({
      "string.pattern.base":
        "Brand must contain only letters and be at least 1 and at most 20 characters long",
    }),
  price: Joi.number().max(1000000).min(0).messages({
    "number.max": "Price must be less than 1000000",
    "number.min": "Price must be at least 0",
  }),
  year: Joi.number().max(2025).min(1990).messages({
    "number.max": "Year must be less than 2025",
    "number.min": "Year must be at least 1990",
  }),
});
