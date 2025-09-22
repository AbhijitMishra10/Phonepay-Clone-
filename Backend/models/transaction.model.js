import mongoose from "mongoose";

const transSchema = new mongoose.Schema({
    sender: {type: mongoose.Schema.Types.ObjectId, ref: 'USER', required: true},
    receiver: {type: mongoose.Schema.Types.ObjectId, ref: 'USER', required: true},
    onModel: {type: String, enum: ["User", "Merchant"], default: "User"},
    amount: {type: Number, required: true},
    type: {type: String, enum:["transfer", "recharge", "bill","insuarance"], default: "transfer"},
    date: {type: Date, default: Date.now},
    status: {type: String, enum: ["success", "failed"], default: "success"},
    cashback: {type: Number, default: 0}
})

const TRANSACTION = mongoose.model("TRANSFER", transSchema)

export default TRANSACTION