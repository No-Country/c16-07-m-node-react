import deleteUser from "../../controllers/users/deleteUser";
import type { Request, Response, NextFunction } from "express";

export default async function deleteUserByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = parseInt(req.params.id, 10);
    await deleteUser(userId);
    return res.status(200).json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    console.error("Error al intentar eliminar el usuario", error);
    next(error);
  }
}
