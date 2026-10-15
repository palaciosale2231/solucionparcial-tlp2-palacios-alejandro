// ! ARCHIVO BASE: no modificar
import {
  UserModel,
  ProfileModel,
  ProjectModel,
  TechnologyModel,
} from "../models/index.js";

export const getAllUsers = async (_req, res) => {
  try {
    const users = await UserModel.findAll({
      attributes: { exclude: ["password"] },
      include: [
        { model: ProfileModel, as: "profile" },
        {
          model: ProjectModel,
          as: "projects",
          include: [{ model: TechnologyModel, as: "technologies" }],
        },
      ],
    });
    return res.status(200).json({ data: users });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await UserModel.findByPk(req.params.id);
    if (!user) return res.status(404).json({ msg: "Usuario no encontrado" });

    await user.destroy();
    return res.status(204).send();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};
