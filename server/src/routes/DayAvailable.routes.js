import { Router } from "express";
const router = Router()

import * as dayControllers from '../controllers/day.controllers'
import { authJwt  } from "../middlewares"

router.get('/:dayId', dayControllers.getDaysId)
router.get('/',dayControllers.getDays)


export default router;
