import { Router } from "express";
import { passportMiddleware } from "../middlewares/passport";
//
import { deleteUserByIdHandler } from "../handlers/users/DeleteUsersById";
import { getUserByIdHandler } from "../handlers/users/GetUsersById";
import { getUsersByEmailHandler } from "../handlers/users/GetUsersByEmail";
import { postUsersHandler } from "../handlers/users/PostUsers";
import { updateUserByIdHandler } from "../handlers/users/UpdateUsersById";
import { getAllUsersHandler } from "../handlers/users/GetAllUsers";
import passport from "passport";

const userRouter = Router();

userRouter.post("/login", passport.authenticate('local', { session: false }), (req, res) => {
    res.json({ message: 'Login correcto', user: req.user });
  });

userRouter.get("/protected", passportMiddleware, (req, res) => {
    res.send('Ruta protegida');
})

userRouter.get("/mail",getUsersByEmailHandler);
userRouter.get("/:id",getUserByIdHandler);
userRouter.get("/",getAllUsersHandler);
userRouter.post("/",postUsersHandler);
userRouter.delete("/:id",deleteUserByIdHandler);
userRouter.put("/:id",updateUserByIdHandler);


export default userRouter;