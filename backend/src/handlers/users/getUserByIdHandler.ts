import getUserById from "../../controllers/users/getUserById"
import type { Request, Response, NextFunction } from "express";

export default async function getUserByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = parseInt(req.params.id, 10);
    const user = await getUserById(userId);

    return res.status(200).json(user);
  } catch (error) {
    console.error("Error al intentar obtener el usuario por id");
    next(error)
  }
}
