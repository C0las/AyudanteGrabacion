import { Router } from "express";
const router = Router()

import * as scheduleControllers from '../controllers/schedule.controllers'
import { authJwt  } from "../middlewares"

router.get('/:dayId', scheduleControllers.getScheduleId)
router.get('/',scheduleControllers.getSchedule)
router.post('/',scheduleControllers.postSchedule)
router.put('/:dayId', scheduleControllers.updateSchedule)
router.delete('/:dayId', scheduleControllers.deleteSchedule)

export default router;
