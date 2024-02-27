import boom from "@hapi/boom";
import bcrypt from "bcrypt";
import { User, Interest, Purpose } from "../../db";
import { TUser } from "../../types/TUser";
export default async function updateUser(
  userId: number,
  userData: Partial<TUser>,
  purposeId: number | null | undefined,
  interestIds: number[]
) {
  // Actualiza el usuario con los datos proporcionados
  const user = (await User.findByPk(userId)) as any;
  if (!user) {
    throw boom.notFound("No se encontró el usuario con el id provisto");
  }

  user.aboutMe = userData.aboutMe;
  user.address = userData.address;
  user.birthdate = userData.birthdate;
  user.country = userData.country;
  user.firstName = userData.firstName;
  user.lastName = userData.lastName;
  user.observations = userData.observations;
  user.postalCode = userData.postalCode;

  if (userData.password) {
    userData.password = await bcrypt.hash(userData.password, 10);
    user.password = userData.password;
  }

  if (userData.email && userData.email !== user.email) {
    const emailAlreadyExist = await User.findOne({
      where: {
        email: userData.email,
      },
    });

    if (emailAlreadyExist) {
      throw boom.badRequest("Ya existe un usuario con ese email");
    }
    user.email = userData.email;
  }

  if (interestIds && interestIds.length > 0) {
    const interestsToSet = [];

    for (let interestId of interestIds) {
      const interest = await Interest.findByPk(interestId);

      if (interest) {
        interestsToSet.push(interest);
      } else {
        throw boom.notFound(`No existe el interés con ese ID`);
      }
    }

    user.setInterests(interestsToSet);
  }

  if (purposeId) {
    const purpose = await Purpose.findByPk(purposeId);
    user.setPurpose(purpose);
  }

  return await user.save(userData);
}
