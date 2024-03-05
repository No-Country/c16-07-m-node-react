import boom from "@hapi/boom"
import bcrypt from "bcrypt";
import { Interest, Purpose, User, Event } from "../../db";
import { TUser } from "../../types/TUser";

export default async function createUser(newData: TUser) {
  const user = await User.findOne({
    where: {
      email: newData.email,
    },
  }) as any;
  if (user) throw boom.badRequest("Ya existe un usuario con ese email");

  newData.password = await bcrypt.hash(newData.password, 10);

  const newUser = await User.create(newData) as any;

  const defaultPurpose = await Purpose.findOne({
    where: { name: "Todavia no estoy seguro/a" },
  }) as any;
  
  newUser.setPurpose(defaultPurpose);

  await newUser.save(newUser);

  return await User.findOne({
    where: {
      email: newData.email,
    },
      attributes: {exclude : ["password"]},
      include: [{ model: Purpose, as: "purpose" }, { model: Interest, through: { attributes: [] }, as: "interests" },  { model: Event, through: { attributes: [] }, as: "events"}],
  }, ) as any;
}
