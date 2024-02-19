import { User } from "@/db";


export async function getAllUsers() {

    const users = await User.findAll();

    if (!users) throw new Error('No se encontraron usuarios');

    return users
}