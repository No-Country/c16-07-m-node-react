import createEvent from "../../controllers/events/createEvent";
import type { NextFunction, Request, Response } from "express";
import type { TEvent } from "../../types/TEvent";

export default async function createEventHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const {locate, category, name, description, date} = req.body
    
    const eventData = {
      locate: locate,
      name: name,
      description: description,
      date: date,
    } as TEvent;

    const event = await createEvent(eventData);
    return res.status(201).json(event);
  } catch (error) {
    console.error("Error al intentar crear el evento");
    next(error);
  }
}
