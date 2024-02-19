import { User } from "@/db";

export async function postUsers(name: string, lastName: string, email: string, password: string) {
    try {
        const user = await User.findOne({
            where: {
                email: email
            }
        })

        if (user) throw new Error("Usuario ya existe");

        const newUser = await User.create({
            name,
            lastName,
            email,
            password
        });

        return newUser;

    } catch (error) {
        throw error;
    }
}