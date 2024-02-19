import { Events } from "../../db";

export async function getAllEvents() {
    try {
        const eventos = await Events.findAll;
    
        if (!eventos) {

        throw new Error(`Error al obtener eventos`);
        }
    

        return eventos;
      } catch (error: any) {

        console.error("Error al buscar eventos:", error.message);
        return null;
      }
    }