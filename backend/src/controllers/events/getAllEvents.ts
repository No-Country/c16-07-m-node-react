import { Event } from "../../db";

export default async function getAllEvents() {
  return await Event.findAll();
}
