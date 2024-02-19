import { updateEvents } from "@/controllers/Eventos/updateEvents";
import { Request, Response } from "express";


export async function updateEventHandler(req: Request, res: Response){
  try {
    const eventID: number = parseInt(req.params.id, 10);


    if (isNaN(eventID)) {
      res.status(400).json({ message: "ID de evento no válido" });
      return;
    }


    const eventData = {
      locate: req.body.locate,
      category: req.body.category,
      name: req.body.name,
      description: req.body.description

    };


    const success = await updateEvents(eventID, eventData);


    if (success) {
      res.status(200).json({ message: "Evento actualizado correctamente" });
    } else {
      res.status(404).json({ message: "Evento no encontrado" });
    }
  } catch (error: any) {

    console.error("Error al actualizar el evento:", error.message);
    res.status(500).json({ message: "Error al actualizar el evento" });
  }
}
