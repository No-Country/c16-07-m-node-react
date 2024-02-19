import { Events } from "../../db";


export async function createEvent(newEventData: any){
  try {
    await Events.create(newEventData);
    return true;
  } catch (error: any) {
    console.error("Error al agregar el evento:", error.message);
    return false;
  }
}