import boom from "@hapi/boom";
import { User, Purpose, Interest } from "../../db";

export default async function getUserById(userId: number) {
  const user = await User.findByPk(userId,{
    attributes: {exclude : ["password"]},
    include: [{ model: Purpose }, { model: Interest, through: { attributes: [] } }],
  });
  if (!user) throw boom.notFound("No se encontró usuario con el id provisto");
  return user;
}
