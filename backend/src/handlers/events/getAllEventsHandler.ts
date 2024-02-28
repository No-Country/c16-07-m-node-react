import getAllEvents from "../../controllers/events/getAllEvents";
import type { NextFunction, Request, Response } from "express";

export default async function getAllEventsHandler(
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
