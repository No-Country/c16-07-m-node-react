import { getAllEvents } from "@/controllers/eventos/getAllEvents";
import type { NextFunction, Request, Response } from "express";

// Manejador para obtener todos los eventos
export async function getAllEventsHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const events = await getAllEvents();
    res.status(200).json(events);
  } catch (error) {
    console.error("Error al intentar obtener los eventos");
    next(error);
  }
}
