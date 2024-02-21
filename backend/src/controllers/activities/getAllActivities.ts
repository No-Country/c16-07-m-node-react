import { Activity } from "@/db";

export async function getAllActivities() {
  return await Activity.findAll();
}
