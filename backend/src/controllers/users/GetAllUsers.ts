import { User } from "@/db";

export async function getAllUsers() {
  return await User.findAll();
}
