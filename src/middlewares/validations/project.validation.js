// * ARCHIVO A COMPLETAR
import { body } from "express-validator";
import {
  ProjectModel,
  TechnologyModel,
  UserModel,
} from "../../models/index.js";

export const createProjectValidation = [
  // TODO: 1. Validar code: obligatorio y único (ProjectModel).
  // TODO: 2. Validar name y description como obligatorios.
  // TODO: 3. Validar status: opcional y limitado a los estados permitidos.
  // TODO: 4. Validar start_date como fecha válida y budget como número positivo, ambos obligatorios.
  // TODO: 5. Validar leader_id: debe existir y pertenecer a un usuario activo (UserModel).
  // TODO: 6. Validar technologies: lista de ids que existan (TechnologyModel).
  // ? Un usuario eliminado lógicamente no puede ser líder: comprobar que la búsqueda lo deje afuera.
];

export const updateProjectValidation = [
  // TODO: 7. Validar code como opcional y único, excluyendo el propio proyecto que se edita.
  // TODO: 8. Validar name y description como opcionales y no vacíos.
  // TODO: 9. Validar status, start_date y budget como opcionales, con las mismas reglas que al crear.
  // TODO: 10. Validar leader_id como opcional, existente y de un usuario activo.
  // TODO: 11. Validar technologies como opcional, con ids que existan.
  // ? Para saber qué proyecto se edita, el id se obtiene de los parámetros de la ruta (req.params).
];
