import { Router } from 'express';
import userRouter from './Users';
import eventsRouter from './Events';
import activitiesRouter from './Activities';

const router = Router();

router.use("/user",userRouter)
router.use("/activities", activitiesRouter)
router.use("/events", eventsRouter)


export default router;