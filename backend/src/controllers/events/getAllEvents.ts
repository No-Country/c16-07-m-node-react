import { Event, Interest } from "../../db";

export default async function getAllEvents() {
  return await Event.findAll({
    include: {model: Interest, through: { attributes: [] }, as: "categories"},
  });
}
