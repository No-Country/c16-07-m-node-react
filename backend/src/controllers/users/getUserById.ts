import boom from "@hapi/boom";
import { User, Purpose, Interest, Event } from "../../db";

export default async function getUserById(userId: number) {
  const user = await User.findByPk(userId,{
    attributes: {exclude : ["password"]},
    include: [{ model: Purpose, as: "purpose" }, { model: Interest, through: { attributes: [] }, as: "interests" },  { model: Event, through: { attributes: [] }, as: "events"}],
  });
  if (!user) throw boom.notFound("No se encontró usuario con el id provisto");
  return user;
}
