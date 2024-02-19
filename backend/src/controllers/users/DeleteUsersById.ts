import { User } from "@/db";


export async function deleteUsersById(userId: number) {

    const user = await User.findByPk(userId);

    if (!user) {
        throw new Error('Usuario no encontrado');
    }

    return user.destroy();
}