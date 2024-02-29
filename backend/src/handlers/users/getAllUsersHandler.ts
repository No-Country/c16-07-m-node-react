import getAllUsers from "../../controllers/users/getAllUsers"
import type { NextFunction, Request, Response } from "express";

export default async function getAllUsersHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const users = await getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error al intentar obtener los usuarios");
    next(error);
  }
}
