import { User, Event } from "../../db";



const associateEvent = async (userId: number, eventId: number) => {
  try {

    const user = await User.findByPk(userId) as any;
    const event = await Event.findByPk(eventId) as any;

    if (!user || !event) {
      throw new Error("Usuario o evento no encontrado");
    }


    await user.addEvent(event);

    return { success: true, message: "Evento asociado al usuario correctamente" };
  } catch (error) {
    console.error("Error al asociar evento al usuario:", error);
    return { success: false, message: "Error al asociar evento al usuario" };
  }
};

export { associateEvent };

