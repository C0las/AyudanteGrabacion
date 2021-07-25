import { Router } from "express";
const router = Router()

import * as AssistantControllers from '../controllers/assistant.controllers'
import { authJwt  } from "../middlewares"

router.get('/:AssistantId', AssistantControllers.getAssistantId)
router.get('/',AssistantControllers.getAssistant)
router.post('/',AssistantControllers.postAssistant)
router.put('/:AssistantId', AssistantControllers.updateAssistant)
router.delete('/:AssistantId', AssistantControllers.deleteAssistant)

export default router;
