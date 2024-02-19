import { Request, Response } from "express";
import { getAllUsers } from "../../controllers/users/GetAllUsers";

export async function getAllUsersHandler(req: Request, res: Response) {

    try {
        const users = await getAllUsers();
        return res.status(200).json(users);
    } catch (error) {
        console.error('Error al obtener todos los usuarios', error);
        return res.status(500).json({ error: 'Error al obtener todos los usuarios' });
    }
}