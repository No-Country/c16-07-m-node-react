import { Event } from "@/db";

export async function getAllEvents() {
  return await Event.findAll();
}
