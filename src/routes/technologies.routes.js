// ! ARCHIVO BASE: no modificar
import { Router } from "express";
import {
  createTechnology,
  deleteTechnology,
  getAllTechnologies,
} from "../controllers/technologies.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";
import { validator } from "../middlewares/validator.middleware.js";
import { createTechnologyValidation } from "../middlewares/validations/technology.validation.js";

export const technologyRoutes = Router();

technologyRoutes.post(
  "/technologies",
  authMiddleware,
  adminMiddleware,
  createTechnologyValidation,
  validator,
  createTechnology
);

technologyRoutes.get("/technologies", authMiddleware, getAllTechnologies);

technologyRoutes.delete(
  "/technologies/:id",
  authMiddleware,
  adminMiddleware,
  deleteTechnology
);
