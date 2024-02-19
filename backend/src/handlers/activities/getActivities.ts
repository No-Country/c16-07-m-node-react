import type { Request, Response } from "express";
import getActivities from "../../controllers/activities/getActivities";

export default async function getActivitiesHandler(req: Request, res: Response )
{
    try {
        const activities = await getActivities();
        return res.status(200).json(activities);
    } catch (error) {
        console.log("Error al intentar obtener las actividades", error);
        return res.status(500).json("Ha ocurrido un error inesperado");
    }
}