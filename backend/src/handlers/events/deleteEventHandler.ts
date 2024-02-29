import deleteEvent from "../../controllers/events/deleteEvent";
import type { NextFunction, Request, Response } from "express";

export default async function deleteEventHandler(
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

    await deleteEvent(id);

    return res.status(200).json({ message: "Evento eliminado correctamente" });
  } catch (error: any) {
    console.error("Error al intentar eliminar el evento");
    next(error);
  }
}
