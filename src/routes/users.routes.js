// ! ARCHIVO BASE: no modificar
import { Router } from "express";
import { deleteUser, getAllUsers } from "../controllers/users.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";

export const userRoutes = Router();

userRoutes.get("/users", authMiddleware, adminMiddleware, getAllUsers);

userRoutes.delete("/users/:id", authMiddleware, adminMiddleware, deleteUser);
