import { Router } from "express";
import passport from "passport";
import { deleteUserByIdHandler } from "../handlers/users/deleteUsersByIdHandler";
import { getUserByIdHandler } from "../handlers/users/getUserByIdHandler";
import { getUserByEmailHandler } from "../handlers/users/getUserByEmailHandler";
import { createUserHandler } from "../handlers/users/createUserHandler";
import { updateUserHandler } from "../handlers/users/UpdateUserHandler";
import { getAllUsersHandler } from "../handlers/users/getAllUsersHandler";
import { logUserInHandler } from "@/handlers/users/logUserInHandler";

const userRouter = Router();

userRouter.post("/login", passport.authenticate('local', { session: false }), logUserInHandler);
userRouter.get("/mail", getUserByEmailHandler);
userRouter.get("/:id",getUserByIdHandler);
userRouter.get("/",getAllUsersHandler);
userRouter.post("/", createUserHandler);
userRouter.put("/:id",updateUserHandler);
userRouter.delete("/:id",deleteUserByIdHandler);

export default userRouter;