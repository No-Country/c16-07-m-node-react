import { updateEvent } from "@/controllers/eventos/updateEvent";
import type { NextFunction, Request, Response } from "express";
import type { TEvent } from "@/types/TEvent";

export async function updateEventHandler(
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

    const {locate, category, name, description} = req.body
    
    const eventData = {
      locate: locate,
      category: category,
      name: name,
      description: description,
    } as TEvent;

    await updateEvent(id, eventData);

    res.status(200).json({ message: "Evento actualizado correctamente" });
  } catch (error) {
    console.error("Error al intentar actualizar el evento");
    next(error);
  }
}
