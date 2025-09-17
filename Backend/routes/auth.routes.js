import express from 'express'
import { register, login } from '../controllers/auth.controller.js'
import authCheck from '../middleware/authMidd.js'

const router = express.Router()

router.post("/register",authCheck, register)
router.post("/login", login)

export default router