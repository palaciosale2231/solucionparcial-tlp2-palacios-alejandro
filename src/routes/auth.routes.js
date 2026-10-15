// * ARCHIVO A COMPLETAR
import { Router } from "express";
import { login, logout, register } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { validator } from "../middlewares/validator.middleware.js";
import {
  registerValidation,
  loginValidation,
} from "../middlewares/validations/auth.validation.js";

export const authRoutes = Router();

// TODO: 1. Decidir y aplicar los middlewares que correspondan a cada ruta.

// ? Registro de usuario: acceso público.
authRoutes.post("/auth/register", register);

// ? Inicio de sesión: acceso público.
authRoutes.post("/auth/login", login);

// ? Cierre de sesión: requiere sesión iniciada.
authRoutes.post("/auth/logout", logout);
