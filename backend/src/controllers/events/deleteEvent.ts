import boom from "@hapi/boom";
import { Event } from "../../db";

export default async function deleteEvent(id: number) {
  const event = await Event.findByPk(id);
  if (!event) throw boom.notFound("No se encontró evento con el id provisto");
  await event.destroy();
}
