import { Router } from 'express';
import activitiesRouter from './Activities';
import eventsRouter from './Events';
import interestsRouter from './Interests';
import purposesRouter from './Purposes';
import userRouter from './Users';

const router = Router();

router.use("/activities", activitiesRouter)
router.use("/events", eventsRouter)
router.use("/interests", interestsRouter)
router.use("/purposes", purposesRouter)
router.use("/users",userRouter)

export default router;