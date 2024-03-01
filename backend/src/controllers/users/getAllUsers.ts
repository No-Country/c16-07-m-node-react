import { Purpose, User, Interest, Event } from "../../db";

export default async function getAllUsers() {
  return await User.findAll({
    attributes: {exclude : ["password"]},
    include: [{ model: Purpose, as: "purpose" }, { model: Interest, through: { attributes: [] }, as: "interests" }, { model: Event, through: { attributes: [] }}],
  });
}
