import User  from  '../../models/User';
import { TUser } from "../../types/TUser";
 export default async function updateUser(
    userId: number,
    userData: Partial<TUser>, // Datos del usuario
    purposeIds: number[], // IDs de propósitos
    interestIds: number[] // IDs de intereses
  ) {
    try {
        // Actualiza el usuario con los datos proporcionados
        const user = await User.findByPK(userId);
        if (!user) {
          throw new Error("Usuario no encontrado");
        }
    
        await user.update(userData);
    
        // Asocia los propósitos e intereses con el usuario
        await user.setPurposes(purposeIds);
        await user.setInterests(interestIds);
    
        return user;
      } catch (error) {
        throw error;
      }
    
 }
/*import { User } from "../../db";


export default async function updateUser(userId: number, newData: TUser) {
    //Todo: Chequear si se está cambiando el password para hacer nuevo hash
    
    const user = await User.update({
        ...newData
    }, { where: { id: userId } });
    
    return user
}*/