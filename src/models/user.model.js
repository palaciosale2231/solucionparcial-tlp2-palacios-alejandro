// * ARCHIVO A COMPLETAR
import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const UserModel = sequelize.define(
  "User",
  {
    username: { type: DataTypes.STRING(20), allowNull: false, unique: true },
    email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(255), allowNull: false },
    role: {
      type: DataTypes.ENUM("developer", "administrator"),
      allowNull: false,
      defaultValue: "developer",
    },
  }
  // TODO: 1. Activar la eliminación lógica (paranoid) en las opciones del modelo.
);
