// * ARCHIVO A COMPLETAR
import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const ProjectModel = sequelize.define("Project", {
  // TODO: 1. code: string, único y obligatorio.
  // TODO: 2. name: string, obligatorio.
  // TODO: 3. description: texto, obligatorio.
  // TODO: 4. status: ENUM con los valores planning, in_progress, paused y finished; obligatorio y con planning como valor por defecto.
  // TODO: 5. start_date: fecha (solo día), obligatoria.
  // TODO: 6. budget: decimal, obligatorio.
  // TODO: 7. leader_id: entero, obligatorio, clave foránea hacia User.
});
