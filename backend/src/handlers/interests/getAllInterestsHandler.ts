import getAllInterests from "../../controllers/interests/getAllInterests";
import type { NextFunction, Request, Response } from "express";

export default async function getAllInterestsHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
    try {
        const interests = await getAllInterests();
        return res.status(200).json(interests);
    } catch (error) {
        console.log("Error al intentar obtener los intereses");
        next(error);
    }
}
