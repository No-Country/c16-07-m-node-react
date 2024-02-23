import { Interest } from "../../db";

export default async function getAllInterests() {
    return await Interest.findAll();
}