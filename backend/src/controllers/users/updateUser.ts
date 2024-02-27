import boom from "@hapi/boom";
import bcrypt from "bcrypt"
import {User,Interest, Purpose} from "../../db"
import { TUser } from "../../types/TUser";
export default async function updateUser(
    userId: number,
    userData: Partial<TUser>, // Datos del usuario
    purposeIds: number[], // IDs de propósitos
    interestIds: number[] // IDs de intereses
  ) {
    try {
        // Actualiza el usuario con los datos proporcionados
        const user = await User.findByPk(userId) as any;
        if (!user) {
          throw boom.notFound("No se encontró el usuario con el id provisto");
        }
        
        if(userData.password){
            userData.password = await bcrypt.hash(userData.password, 10);
        }
      
        if (userData.email && userData.email !== user.email) {
        
            const emailAlreadyExist = await User.findOne({
                where: {
                    email: userData.email,
                }
            });

            if (emailAlreadyExist) {
                throw boom.badRequest("Ya existe un usuario con ese email");
            }
            user.email = userData.email;
          
        }
     
        
        if (userData.interestIds && userData.interestIds.length > 0) {
            const interestsToSet = [];
        
            for (let interestId of userData.interestIds) {
                const interest = await Interest.findByPk(interestId);
        
                if (interest) {
                    interestsToSet.push(interest);
                } else {
                    throw boom.notFound(`No existe el interés con ese ID`);
                }
            }
        
            await user.setInterests(interestsToSet);
        }
        
        if (userData.purposeId) {
            const purpose = await Purpose.findByPk(userData.purposeId);
            user.setPurpose(purpose);
        }
    
       
        
     return await user.save(userData);
    
     
    } catch (error) {
        throw error;
      }
    
    }
