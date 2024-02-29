import { Activity } from "../../db";

export default async function getAllActivities() {
  return await Activity.findAll();
}
