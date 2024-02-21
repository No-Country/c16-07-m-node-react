import { Event } from "@/db";
import type { TEvent } from "@/types/TEvent";

export async function createEvent(newEventData: TEvent) {
  return await Event.create(newEventData);
}
