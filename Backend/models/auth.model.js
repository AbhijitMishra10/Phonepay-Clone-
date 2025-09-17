import mongoose from 'mongoose'

const authSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
})

const AUTH = mongoose.model("AUTH", authSchema)

export default AUTH 