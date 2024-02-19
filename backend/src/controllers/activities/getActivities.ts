import { Activity } from "../../db";

export default async function getActivities() {
    return await Activity.findAll();
}