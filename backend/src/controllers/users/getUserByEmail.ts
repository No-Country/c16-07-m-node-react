import boom from "@hapi/boom";
import { User } from "../../db";

export default async function getUserByEmail(email: string) {
  const user = await User.findOne({ where: { email } });

  if (!user)
    throw boom.notFound("No se encontró usuario con el email provisto");

  return user;
}
