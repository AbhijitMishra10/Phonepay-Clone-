import mongoose from "mongoose";

const merchantScheme = new mongoose.Schema({
    name: {type: String, required: true},
    shopName: {type: String, required: true},
    phone: {type: String, required: true, unique:true},
    balance: {type: Number, required: true, default: 0},
    qrCode: {type: String, required: true},
})

const Merchant = mongoose.model("Merchant", merchantScheme)

export default Merchant