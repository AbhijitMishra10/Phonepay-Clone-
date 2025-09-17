import express from 'express'
import { getAll, getById, createUser, updateUserById, deleteUserById } from '../controllers/user.controller.js'
const router = express.Router()

router.get("/", getAll)
router.get("/:id", getById)
router.post("/:id", createUser)
router.patch("/:id", updateUserById)
router.delete("/:id", deleteUserById)

export default router