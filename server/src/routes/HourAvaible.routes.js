import { Router } from "express";
const router = Router()

import * as HourControllers from '../controllers/Hour.controller'
import { authJwt  } from "../middlewares"

router.get('/:hourId', HourControllers.getHourId)
router.get('/',HourControllers.getHour)
router.post('/',HourControllers.postsHour)
router.put('/:hourId', HourControllers.updateHour)
router.delete('/:hourId', HourControllers.deleteHour)

export default router;
