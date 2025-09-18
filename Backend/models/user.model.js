import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const userSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    phone: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    balance: {type: Number, default: 1000},
    pin: {type: String, required: true}
})

userSchema.pre("save", async function(next) {
    if(!this.isModified("pin")) return next()
    this.pin = await bcrypt.hash(this.pin, 12)
    return next()
})
userSchema.methods.matchPin = async function(enteredPin) {
    return await bcrypt.compare(enteredPin, this.pin)
}

const USER = mongoose.model("USER", userSchema)

export default USER