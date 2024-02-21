import boom from "@hapi/boom"
import bcrypt from "bcrypt";
import { User } from "@/db";
import { TUser } from "@/types/TUser";

export async function createUser(newData: TUser) {
  const user = await User.findOne({
    where: {
      email: newData.email,
    },
  }) as any;
  if (user) throw boom.badRequest("Ya existe un usuario con ese email");

  user.password = await bcrypt.hash(newData.password, 10);

  const newUser = await User.create(newData);

  return newUser;
}
