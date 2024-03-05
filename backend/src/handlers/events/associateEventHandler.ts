import { associateEvent } from "../../controllers/events/associateEvent";
import type { NextFunction, Request, Response } from "express";

const handleAsociarEventoUsuario = async (req: Request, res: Response) => {
  const { userId, eventId } = req.body;

  try {
    const result = await associateEvent(userId, eventId);
    if (result.success) {
      return res.status(200).json({ message: result.message });
    } else {
      return res.status(404).json({ message: result.message });
    }
  } catch (error) {
    console.error("Error al asociar evento al usuario:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export { handleAsociarEventoUsuario };
