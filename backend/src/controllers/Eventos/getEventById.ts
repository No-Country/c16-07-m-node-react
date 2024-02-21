import boom from "@hapi/boom";
import { Event } from "@/db";

export async function getEventById(id: number) {
  const event = await Event.findByPk(id);
  if (!event) throw boom.notFound("No se encontró evento con el id provisto");
  return event;
}
