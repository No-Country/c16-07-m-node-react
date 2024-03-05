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
      imageUrl,
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
      imageUrl,
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

function getUserWithoutPassword(user: TUser) {
  return {
    userId: user.id,
    address: user.address,
    aboutMe: user.aboutMe,
    birthdate: user.birthdate,
    createdAt: user.createdAt,
    country: user.country,
    email: user.email,
    imageUrl: user.imageUrl,
    firstName: user.firstName,
    lastName: user.lastName,
    observations: user.observations,
    postalCode: user.postalCode,
    phone: user.phone,
    updatedAt: user.updatedAt,
  };
}
