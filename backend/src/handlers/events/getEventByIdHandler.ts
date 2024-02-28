import getEventById from "../../controllers/events/getEventById";
import { NextFunction, Request, Response } from "express";

export default async function getEventByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id);
    const event = await getEventById(id);
    return res.status(200).json(event);
  } catch (error) {
    console.error("Error al intettar obtener el evento por id");
    next(error);
  }
}
