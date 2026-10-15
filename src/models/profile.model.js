// ! ARCHIVO BASE: no modificar
import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const ProfileModel = sequelize.define("Profile", {
  employee_number: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  first_name: { type: DataTypes.STRING(50), allowNull: false },
  last_name: { type: DataTypes.STRING(50), allowNull: false },
  phone: { type: DataTypes.STRING(20), allowNull: true },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    references: {
      model: "Users",
      key: "id",
    },
  },
});
