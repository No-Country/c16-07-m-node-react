import { createUser } from "@/controllers/users/createUser";
import type { Request, Response, NextFunction } from "express";
import type { TUser } from "@/types/TUser";

export async function createUserHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const {
      address,
      birthdate,
      firstName,
      lastName,
      email,
      observations,
      password,
    } = req.body;
    
    const userData = {
      address,
      birthdate,
      firstName,
      lastName,
      email,
      observations,
      password,
    } as TUser;

    const user = await createUser(userData);
    return res.status(201).json(user);
  } catch (error) {
    console.error("Error al intentar registrar el usuario");
    next(error);
  }
}
