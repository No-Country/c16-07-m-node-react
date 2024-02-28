import getUserByEmail from "../../controllers/users/getUserByEmail"
import type { NextFunction, Request, Response } from "express";

export default async function getUserByEmailHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const email = req.params.email;
    const user = await getUserByEmail(email);

    return res.status(200).json(user);
  } catch (error) {
    console.error("Error al intentar obtener el usuario por email");
    next(error);
  }
}
