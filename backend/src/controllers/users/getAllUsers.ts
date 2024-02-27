import { User } from "../../db";

export default async function getAllUsers() {
  return await User.findAll({
    attributes: {exclude : ["password"]},
    include: { all: true },
  });
}
