import { Request, Response } from 'express';
import { getEvents } from '../../controllers/Eventos/getEvents';


export async function getEventHandler(req: Request, res: Response) {
    try {
      const eventId = parseInt(req.params.id);
      const event = await getEvents(eventId);
  
      return res.status(200).json(event);
    } catch (error) {
      console.error('Error al obtener el evento por id', error);
      return res.status(404).json({ error: 'Evento no encontrado por id' });
    }
  }