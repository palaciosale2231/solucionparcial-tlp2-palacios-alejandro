// ! ARCHIVO BASE: no modificar
import { body } from "express-validator";
import { TechnologyModel } from "../../models/index.js";

export const createTechnologyValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ max: 100 })
    .withMessage("El nombre no puede superar los 100 caracteres")
    .custom(async (name) => {
      const found = await TechnologyModel.findOne({ where: { name } });
      if (found) throw new Error("La technology ya existe");
      return true;
    }),
  body("description")
    .optional({ values: "falsy" })
    .isString()
    .withMessage("La descripción debe ser texto"),
];
