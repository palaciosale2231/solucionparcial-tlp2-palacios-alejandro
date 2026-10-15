// ! ARCHIVO BASE: no modificar
import jwt from "jsonwebtoken";

export const signToken = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

export const verifyToken = (token) => jwt.verify(token, process.env.JWT_SECRET);
