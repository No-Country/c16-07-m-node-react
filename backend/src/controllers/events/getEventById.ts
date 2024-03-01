import boom from "@hapi/boom";
import { Event, Interest } from "../../db";

export default async function getEventById(id: number) {
  const event = await Event.findByPk(id, {
    include: { model: Interest, through: { attributes: [] }, as: "categories" },
  });
  if (!event) throw boom.notFound("No se encontró evento con el id provisto");
  return event;
}
