// ! ARCHIVO BASE: no modificar
import { ProjectModel } from "../models/index.js";

export const leaderMiddleware = async (req, res, next) => {
  try {
    const project = await ProjectModel.findByPk(req.params.id);
    if (!project)
      return res.status(404).json({ msg: "Proyecto no encontrado" });

    if (project.leader_id !== req.user.id)
      return res
        .status(403)
        .json({ msg: "No tienes permisos para acceder a este proyecto" });

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};
