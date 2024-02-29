import express from "express";
import getAllActivitiesHandler from "../handlers/activities/getAllActivitiesHandler";
import getActivityByIdHandler from "../handlers/activities/getActivitiyByIdHandler";

const activitiesRouter = express.Router();

activitiesRouter.get("/:id", getActivityByIdHandler);
activitiesRouter.get("/", getAllActivitiesHandler);

export default activitiesRouter;