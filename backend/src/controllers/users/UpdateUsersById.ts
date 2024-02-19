import { User } from "@/db";

export async function updateUserById(name: string, email: string, userId: number, data: any, password: string) {
    const user = await User.update({
        name,
        password,
    }, { where: { id: userId } });
    return user
}