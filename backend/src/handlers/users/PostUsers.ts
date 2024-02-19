import { Request, Response } from "express";
import { postUsers } from "../../controllers/users/PostUsers";

export async function postUsersHandler(req: Request, res: Response) {

    try {
        const { name, lastName, email, password } = req.body;
        const user = await postUsers(name, lastName, email, password);
        return res.status(201).json(user);
    } catch (error) {
        console.error('Error al registrar el usuario', error);
        return res.status(500).json({ error: 'Error al registrar el usuario' });
    }
}