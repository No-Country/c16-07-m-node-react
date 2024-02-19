import { Events } from "../../db";

export async function deleteEvent(eventID: number) {
    try {
        const event = await Events.findByPk(eventID);
    
        if (!event) {

        throw new Error(`Evento con ID ${eventID} no encontrado`);
        }

        await event.destroy();

        return true;
      } catch (error: any) {

        console.error("Error al eliminar el evento:", error.message);
        return false;
      }
    }