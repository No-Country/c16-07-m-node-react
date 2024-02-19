import { Router } from 'express';
import userRouter from './Users';
import commentRouter from './Comments';
import eventsRouter from './Events';


const router = Router();


router.use("/user",userRouter)

router.use("/comment", commentRouter)

router.use("/events", eventsRouter)


export default router;