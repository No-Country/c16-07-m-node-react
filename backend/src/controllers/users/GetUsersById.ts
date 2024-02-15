import { Users } from "../../db";

export async function getUserById(userId: number) {
    const user = await Users.findByPk(userId);
  
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
  
    return user;
  }