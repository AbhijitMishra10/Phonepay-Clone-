import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const url = process.env.URL

const connectDB = async(req,res) => {
    try {
        await new mongoose.connect(url)
        console.log("Mongo DB is up and running")
        res.send("Mongo DB is up and connected")
    } catch (error) {
        console.error("Server Error", error.message)
    }
}

export default connectDB