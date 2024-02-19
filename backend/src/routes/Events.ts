import { createEventHandler } from "@/handlers/Eventos/createEventsHandler";
import { deleteEventHandler } from "@/handlers/Eventos/deleteEventHandler";
import { getAllEventsHandler } from "@/handlers/Eventos/getAllEventsHandler";
import { getEventHandler } from "@/handlers/Eventos/getEventsHandler";
import { updateEventHandler } from "@/handlers/Eventos/updateEventsHandler";
import express from "express";

const eventsRouter = express.Router();

eventsRouter.get('/getEvent/:id', getEventHandler);
eventsRouter.post('/create', createEventHandler);
eventsRouter.put('/update/:id', updateEventHandler);
eventsRouter.delete('/delete/:id', deleteEventHandler);
eventsRouter.get('/getAllEvents', getAllEventsHandler);


export default eventsRouter;