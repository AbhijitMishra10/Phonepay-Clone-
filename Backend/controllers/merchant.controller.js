import Merchant from "../models/merchant.model";
import mongoose from "mongoose";
import QRCode from 'qrcode'

//create merchant
export const createMerchant = async(req,res) => {
    try {
        const{name, shopName, phone} = req.body
        const existing = await Merchant.findOne({phone})
        if(existing) return res.status(400).json({m:"Merchant already exists"})
        const merchant = new Merchant({name,shopName,phone})
        // generate qrcode based on the merchant id
        const qrData = `${merchant._id}`
        const qrCode = await QRCode.toDataURL(qrData)

        merchant.qrCode = qrCode
        await merchant.save()
        return res.status(201).json({m:"Merchant created", merchant})
    } catch (error) {
        return res.status(400).json({m:"Server Error", err: error.message})
    }  
}
//get merchant
export const getQR = async(req,res) => {
    try {
        const merchant = await Merchant.findById(req.params.id)
        if(!merchant) return res.status(400).json({m:"Merchant doesn't exists"})
        res.json({qrCode: merchant.qrCode})        
    } catch (error) {
        return res.status(400).json({m:"Server Error", err: error.message})
    }
}