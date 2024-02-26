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
      address,
      birthdate,
      firstName,
      lastName,
      email,
      observations,
      password,
      purposes,//agrega la recepción de propósitos desde el body
      interests,//Agrega la recepción de intereses desde el body
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

    // Llama a la función updateUser pasando los IDs de purposes e interests
    const user = await updateUser(userId, userData, purposes, interests);
    return res.status(200).json(user);

    
    
    //const user = await updateUser(userId, userData);
    //return res.status(200).json(user);
  } catch (error) {
    console.error("Error al intentar actualizar el usuario");
    next(error);
  }
}
