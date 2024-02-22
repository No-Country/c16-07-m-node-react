import boom from "@hapi/boom";
import { Event } from "../../db";
import type { TEvent } from "../../types/TEvent";

export default async function updateEvent(id: number, newData: TEvent) {
  const event = await Event.findByPk(id);
  if (!event) throw boom.notFound("No se encontró evento con el id provisto");
  await event.update(newData);
}
