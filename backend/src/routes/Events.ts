import express from "express";
import createEventHandler  from "../handlers/events/createEventHandler";
import deleteEventHandler  from "../handlers/events/deleteEventHandler";
import getAllEventsHandler  from "../handlers/events/getAllEventsHandler";
import getEventByIdHandler  from "../handlers/events/getEventByIdHandler";
import updateEventHandler  from "../handlers/events/updateEventHandler";
import { handleAsociarEventoUsuario } from "../handlers/events/associateEventHandler";

const eventsRouter = express.Router();

eventsRouter.get("/:id", getEventByIdHandler);
eventsRouter.get("/", getAllEventsHandler);
eventsRouter.post("/", createEventHandler);
eventsRouter.post("/add-user", handleAsociarEventoUsuario);
eventsRouter.put("/:id", updateEventHandler);
eventsRouter.delete("/:id", deleteEventHandler);

export default eventsRouter;
