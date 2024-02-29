import boom from "@hapi/boom";
import { Activity } from "../../db";

export default async function getActivityById(id: number) {
  const activity = await Activity.findByPk(id);

  if (!activity)
    throw boom.notFound("No se encontró actividad con el id provisto");

  return activity;
}
