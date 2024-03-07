import { TUser } from "../types/TUser";

export function getUserWithoutPassword(user: TUser) {
  return {
    userId: user.id,
    address: user.address,
    aboutMe: user.aboutMe,
    birthdate: user.birthdate,
    createdAt: user.createdAt,
    country: user.country,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    observations: user.observations,
    postalCode: user.postalCode,
    phone: user.phone,
    updatedAt: user.updatedAt,
  };
}
