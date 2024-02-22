import getActivityById from "../../controllers/activities/getActivityById";
import type { NextFunction, Request, Response } from "express";

export default async function getActivityByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id);
    const activity = await getActivityById(id);
    return res.status(200).json(activity);
  } catch (error) {
    console.log("No se encontró actividad con el id provisto");
    next(error);
  }
}
