import { getAllActivities } from "../../controllers/activities/getAllActivities";
import type { NextFunction, Request, Response } from "express";

export async function getAllActivitiesHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const activities = await getAllActivities();
    return res.status(200).json(activities);
  } catch (error) {
    console.log("Error al intentar obtener las actividades");
    next(error);
  }
}
