import express from 'express'
import { getRewards } from '../controllers/reward.controller.js'
import authMidd from '../middleware/authMidd.js'

const router = express.Router()
router.get("/", authMidd, getRewards)

export default router