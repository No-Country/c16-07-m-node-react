import { Request, Response } from "express";
import { updateUserById } from "../../controllers/users/UpdateUsersById";

export async function updateUserByIdHandler(req: Request, res: Response) {

    try {
        const userId = parseInt(req.params.id, 10);
        const { name, lastName, email, password } = req.body;
        const user = await updateUserById( userId, name, lastName, email, password);
        return res.status(200).json(user);
    } catch (error) {
        console.error('Error al actualizar el usuario', error);
        return res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
}