import { User } from "@/db";

export async function getUsersByEmail(email: string) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
        throw new Error("Usuario no encontrado");
    }
    return user;
}