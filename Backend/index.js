import express from 'express'
import connectDB from './config/db.config.js'
import dotenv from 'dotenv'
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'
import transactionRoutes from './routes/transaction.routes.js'
dotenv.config()
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())

// app.use("/api/userRoutes", userRoutes)
app.use("/api/authRoutes", authRoutes)
app.use("/api/transactionRoutes", transactionRoutes)

connectDB()

app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT}`)
})