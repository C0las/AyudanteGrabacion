import { Router } from "express";

const router = Router()

import * as authCtrl  from '../controllers/auth.controllers'

router.post('/singnup', authCtrl.signUp)

router.post('/singnin', authCtrl.signin)

export default router;