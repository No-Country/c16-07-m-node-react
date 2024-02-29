import { Purpose, User, Interest } from "../../db";

export default async function getAllUsers() {
  return await User.findAll({
    attributes: {exclude : ["password"]},
    include: [{ model: Purpose, as: "pupose" }, { model: Interest, through: { attributes: [] }, as: "interests" }],
  });
}
