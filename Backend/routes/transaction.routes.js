import express from 'express'
import { getBalance, getTransactions, sendMoney } from "../controllers/transaction.controller.js";
import authCheck from '../middleware/authMidd.js';
import { recharge, bill } from '../controllers/transaction.controller.js';
import pinnMidd from '../middleware/pinMidd.js';
const router = express.Router()

router.get("/balance", authCheck, getBalance)
router.post("/send", authCheck,pinnMidd, sendMoney)
router.get("/history", authCheck, getTransactions)

router.post("/recharge", authCheck,pinnMidd, recharge)
router.post("/bill", authCheck,pinnMidd, bill)
export default router