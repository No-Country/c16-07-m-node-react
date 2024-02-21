import express from "express";
import { createEventHandler } from "@/handlers/eventos/createEventHandler";
import { deleteEventHandler } from "@/handlers/eventos/deleteEventHandler";
import { getAllEventsHandler } from "@/handlers/eventos/getAllEventsHandler";
import { getEventByIdHandler } from "@/handlers/eventos/getEventByIdHandler";
import { updateEventHandler } from "@/handlers/eventos/updateEventHandler";

const eventsRouter = express.Router();

eventsRouter.get("/:id", getEventByIdHandler);
eventsRouter.get("/", getAllEventsHandler);
eventsRouter.post("/", createEventHandler);
eventsRouter.put("/:id", updateEventHandler);
eventsRouter.delete("/:id", deleteEventHandler);

export default eventsRouter;
