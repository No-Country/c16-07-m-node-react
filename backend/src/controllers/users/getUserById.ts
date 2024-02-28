import boom from "@hapi/boom";
import { User } from "../../db";

export default async function getUserById(userId: number) {
  const user = await User.findByPk(userId);
  if (!user) throw boom.notFound("No se encontró usuario con el id provisto");
  return user;
}
