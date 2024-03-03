import createUser from "../../controllers/users/createUser";
import { getUserWithoutPassword } from "../../Utils/helpers";
import type { Request, Response, NextFunction } from "express";
import type { TUser } from "../../types/TUser";

export default async function createUserHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const {
      address,
      aboutMe,
      birthdate,
      country,
      email,
      firstName,
      lastName,
      observations,
      password,
      phone,
      postalCode,
    } = req.body;

    const userData = {
      address,
      aboutMe,
      birthdate,
      country,
      email,
      firstName,
      lastName,
      observations,
      password,
      phone,
      postalCode,
    } as TUser;

    const user = await createUser(userData) as any;
    const userWithoutPassword = getUserWithoutPassword(user);
    
    return res.status(201).json(userWithoutPassword);
  } catch (error) {
    console.error("Error al intentar registrar el usuario");
    next(error);
  }
}
