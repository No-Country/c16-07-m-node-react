import express from "express";
import getAllPurposesHandler from "../handlers/purposes/getAllPurposes";

const purposesRouter = express.Router();

purposesRouter.get("/", getAllPurposesHandler);

export default purposesRouter;