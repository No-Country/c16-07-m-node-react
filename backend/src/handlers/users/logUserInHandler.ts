import jwt from "jsonwebtoken";
import { TUser } from "../../types/TUser";
import { Request, Response } from "express";
import { getUserWithoutPassword } from "../../Utils/helpers";

export default async function logUserInHandler(req: Request, res: Response) {
  const user = req.user as TUser; //req.user fue establecido por passport en ese punto

    const {JWT_KEY} = process.env;
    if(!JWT_KEY){
        console.log("Error: No se ha establecido una clave de JWT");
        process.exit(1);
    }

    const token = jwt.sign({ sub: user.id }, JWT_KEY, {
        expiresIn: "1d",
    });

  const userWithoutPassword = getUserWithoutPassword(user);

  return res
        .header("authorization", `Bearer ${token}`)
        .header("access-control-expose-headers", "authorization")
        .status(200)
        .json(userWithoutPassword);
}
