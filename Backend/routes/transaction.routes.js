import express from 'express'
import { getBalance, getTransactions, sendMoney } from "../controllers/transaction.controller.js";
import authCheck from '../middleware/authMidd.js';

const router = express.Router()

router.get("/balance", authCheck, getBalance)
router.post("/send", authCheck, sendMoney)
router.get("/history", authCheck, getTransactions)

export default router