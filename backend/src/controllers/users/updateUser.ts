import { User } from "@/db";
import { TUser } from "@/types/TUser";

export async function updateUser(userId: number, newData: TUser) {
    //Todo: Chequear si se está cambiando el password para hacer nuevo hash
    
    const user = await User.update({
        ...newData
    }, { where: { id: userId } });
    
    return user
}