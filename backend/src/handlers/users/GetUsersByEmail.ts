import { Request, Response } from "express";
import { getUsersByEmail } from "../../controllers/users/GetUsersByEmail";

export async function getUsersByEmailHandler(req: Request, res: Response) {

    try {
        const email = req.params.email;
        const user = await getUsersByEmail(email);

        return res.status(200).json(user);
    }catch (error) {
    console.error('Error al obtener el usuario por email', error);
    return res.status(404).json({ error: 'Usuario no encontrado por email' });
    }
}