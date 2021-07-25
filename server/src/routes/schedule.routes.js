import { Router } from "express";
const router = Router()

import * as scheduleControllers from '../controllers/schedule.controllers'
import { authJwt  } from "../middlewares"

router.get('/:scheduleId', scheduleControllers.getScheduleId)
router.get('/',scheduleControllers.getSchedule)
router.post('/',scheduleControllers.postSchedule)
router.put('/:scheduleId', scheduleControllers.updateSchedule)
router.delete('/:scheduleId', scheduleControllers.deleteSchedule)

export default router;
