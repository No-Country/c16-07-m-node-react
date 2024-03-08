import updateUser from "../../controllers/users/updateUser"
import type { NextFunction, Request, Response } from "express";
import type { TUser } from "../../types/TUser";

export default async function updateUserHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = parseInt(req.params.id, 10);
    
    const {
      aboutMe,
      address,
      birthdate,
      country,
      email,
      imageUrl,
      interestIds,
      firstName,
      lastName,
      observations,
      password,
      postalCode,
      phone,
      purposeId,
    } = req.body;
    
    const userData = {
      aboutMe,
      address,
      birthdate,
      country,
      email,
      imageUrl,
      firstName,
      lastName,
      observations,
      password,
      phone,
      postalCode,
    } as TUser;

    const user = await updateUser(userId, userData, purposeId, interestIds) as any;
    
    return res.status(200).json(user);
  } catch (error) {
    console.error("Error al intentar actualizar el usuario");
    next(error);
  }
}
