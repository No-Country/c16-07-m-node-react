import { Request, Response } from "express";
import { deleteEvent } from "@/controllers/Eventos/deleteEvent";


export async function deleteEventHandler(req: Request, res: Response){
  try {

    const eventID: number = parseInt(req.params.id, 10);


    if (isNaN(eventID)) {
      res.status(400).json({ message: "ID de evento no válido" });
      return;
    }


    const success = await deleteEvent(eventID);

    if (success) {
      res.status(200).json({ message: "Evento eliminado correctamente" });
    } else {
      res.status(404).json({ message: "Evento no encontrado" });
    }
  } catch (error: any) {

    console.error("Error al eliminar el evento:", error.message);
    res.status(500).json({ message: "Error al eliminar el evento" });
  }
}