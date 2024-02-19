import { Events } from "../../db";

export async function getEvents(eventID: number) {
    try {
        // const event = await Events.findByPk(eventID);
    
        // if (!event) {

        //   throw new Error(`Evento con ID ${eventID} no encontrado`);
        // }
    

        return "soyevents";
      } catch (error: any) {

        console.error("Error al buscar el evento:", error.message);
        return null;
      }
    }