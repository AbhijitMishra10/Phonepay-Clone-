import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    phone: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    balance: {type: Number, default: true},
})

const USER = mongoose.model("USER", userSchema)

export default USER