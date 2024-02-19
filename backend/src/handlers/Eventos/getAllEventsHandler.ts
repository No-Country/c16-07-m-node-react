import { Request, Response } from "express";
import { getAllEvents } from "@/controllers/Eventos/getAllEvents";

// Manejador para obtener todos los eventos
export async function getAllEventsHandler(req: Request, res: Response) {
  try {

    const events = await getAllEvents();

    res.status(200).json(events);
  } catch (error: any) {

    console.error("Error al obtener todos los eventos:", error.message);
    res.status(500).json({ message: "Error al obtener todos los eventos" });
  }
}