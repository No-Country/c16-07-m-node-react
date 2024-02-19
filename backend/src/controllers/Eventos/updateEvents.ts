import { Events } from "../../db";

export async function updateEvents(eventID: number, newData: any) {
    try {
        const event = await Events.findByPk(eventID);
    
        if (!event) {

        throw new Error(`Evento con ID ${eventID} no encontrado`);
        }

        await event.update(newData);

        return true;
      } catch (error: any) {

        console.error("Error al actualizar el evento:", error.message);
        return false;
      }
    }