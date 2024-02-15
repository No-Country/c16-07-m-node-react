import { Router } from 'express';
import userRouter from './Users';
import commentRouter from './Comments';


const router = Router();


router.use("/user",userRouter)

router.use("/comment", commentRouter)


export default router;