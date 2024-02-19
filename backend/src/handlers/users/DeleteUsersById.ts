import { Request, Response } from "express";
import { deleteUsersById } from "../../controllers/users/DeleteUsersById";


export async function deleteUserByIdHandler(req: Request, res: Response) {

    try {
        const userId = parseInt(req.params.id, 10);
        await deleteUsersById(userId);
        return res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el usuario', error);
        return res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
}