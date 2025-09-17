import mongoose from "mongoose";

const transSchema = new mongoose.Schema({
    sender: {type: mongoose.Schema.Types.ObjectId, ref: 'USER', required: true},
    receiver: {type: mongoose.Schema.Types.ObjectId, ref: 'USER', required: true},
    amount: {type: Number, required: true},
    type: {type: String, enum:["transfer", "recharge", "bill","insuarance"], default: "transfer"},
    date: {type: Date, default: Date.now},
    status: {type: String, enum: ["success", "failed"], default: "success"},
})

const TRANSACTION = mongoose.model("TRANSFER", transSchema)

export default TRANSACTION