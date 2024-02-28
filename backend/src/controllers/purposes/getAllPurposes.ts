import { Purpose } from "../../db";

export default async function getAllPurposes() {
    return await Purpose.findAll();
}