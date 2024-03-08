import updateEvent from "../../controllers/events/updateEvent";
import type { NextFunction, Request, Response } from "express";
import type { TEvent } from "../../types/TEvent";

export default async function updateEventHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id: number = parseInt(req.params.id, 10);

    if (isNaN(id)) {
      res.status(400).json({ message: "ID de evento no válido" });
      return;
    }

    const {locate, name, description, date} = req.body
    
    const eventData = {
      locate: locate,
      name: name,
      description: description,
      date: date,
    } as TEvent;

    await updateEvent(id, eventData);

    res.status(200).json({ message: "Evento actualizado correctamente" });
  } catch (error) {
    console.error("Error al intentar actualizar el evento");
    next(error);
  }
}
