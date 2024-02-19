import { createEvent } from "@/controllers/Eventos/createEvent";
import { Request, Response } from "express";


export async function createEventHandler(req: Request, res: Response){
  try {
    const eventData = {
      locate: req.body.locate,
      category: req.body.category,
      name: req.body.name,
      description: req.body.description

    };
    const success = await createEvent(eventData);


    if (success) {
      res.status(201).json({ message: "Evento creado correctamente" });
    } else {
      res.status(500).json({ message: "No se pudo crear el evento" });
    }
  } catch (error: any) {

    console.error("Error al crear el evento:", error.message);
    res.status(500).json({ message: "Error al crear el evento" });
  }
}
