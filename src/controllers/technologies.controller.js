// ! ARCHIVO BASE: no modificar
import { TechnologyModel, ProjectModel } from "../models/index.js";

export const createTechnology = async (req, res) => {
  try {
    const { name, description } = req.body;
    const technology = await TechnologyModel.create({ name, description });
    return res.status(201).json({ data: technology });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

export const getAllTechnologies = async (_req, res) => {
  try {
    const technologies = await TechnologyModel.findAll({
      include: [{ model: ProjectModel, as: "projects" }],
    });
    return res.status(200).json({ data: technologies });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

export const deleteTechnology = async (req, res) => {
  try {
    const technology = await TechnologyModel.findByPk(req.params.id);
    if (!technology)
      return res.status(404).json({ msg: "Technology no encontrada" });

    await technology.destroy();
    return res.status(204).send();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};
