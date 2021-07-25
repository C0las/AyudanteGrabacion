import { Router } from "express";
const router = Router()

import * as reportControllers from '../controllers/report.controllers'
import { authJwt  } from "../middlewares"

router.get('/:reportId', reportControllers.getReportId)
router.get('/',reportControllers.getReport)
router.post('/',reportControllers.postReport)
router.put('/:reportId', reportControllers.updateReport)
router.delete('/:reportId', reportControllers.deleteReport)

export default router;
