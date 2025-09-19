import express from 'express'
import { createMerchant, getQR } from '../controllers/merchant.controller.js'

const router = express.Router()

router.post("/", createMerchant)
router.get("/:id/getQR", getQR)

export default router