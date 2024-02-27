import createUser from "../../controllers/users/createUser";
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

    const user = await createUser(userData);
    return res.status(201).json(user);
  } catch (error) {
    console.error("Error al intentar registrar el usuario");
    next(error);
  }
}
