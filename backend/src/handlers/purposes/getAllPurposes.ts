import getAllPurposes from "../../controllers/purposes/getAllPurposes";
import type { NextFunction, Request, Response } from "express";

export default async function getAllPurposesHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
    try {
        const purposes = await getAllPurposes();
        return res.status(200).json(purposes);
    } catch (error) {
        console.log("Error al intentar obtener los propositos");
        next(error);
    }
}
