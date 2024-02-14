import { Application } from "express";
import usersController from "./controllers/users-controller";

export default (app: Application) => {
    app.use("/api/users", usersController);
}