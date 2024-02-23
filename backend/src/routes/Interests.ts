import express from "express";
import getAllInterestsHandler from "../handlers/interests/getAllInterestsHandler";

const interestsRouter = express.Router();

interestsRouter.get("/", getAllInterestsHandler);

export default interestsRouter;