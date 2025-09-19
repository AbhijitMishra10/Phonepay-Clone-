import USER from "../models/user.model.js";
import TRANSACTION from "../models/transaction.model.js";
import Merchant from "../models/merchant.model.js";
export const getBalance = async(req,res) => {
    try {
        const user = await USER.findById(req.user.id)
        res.json({balance: user.balance})
    } catch (error) {
        res.status(500).json({m:"Server Error", err: error.message})
    }
}
export const sendMoney = async(req,res) => {
    try {
        const{phone, amount} = req.body
        const sender = await USER.findById(req.user.id)
        const receiver = await USER.findOne({phone})
        if(amount <= 0){
            return res.status(400).json({m: "Invalid Amount"})
        }
        if(!receiver) {
            return res.status(400).json({m: "Receiver not found"})
        }
        if(receiver._id.toString() === sender._id.toString()){
            return res.status(400).json({m: "Cant send money to yourself"})
        }
        if(sender.balance < amount) {
            return res.status(400).json({m: "Insufficient balance"})
        }
        // Update Balance
        sender.balance -= amount
        receiver.balance += amount

        await sender.save()
        await receiver.save()

        // Save Transactions
        const transaction = new TRANSACTION({
            sender: sender.id,
            receiver: receiver.id,
            amount,
            type: 'transfer',
            status: 'success'
        })

        await transaction.save()

    } catch (error) {
        res.status(500).json({m:"Server Error", err: error.message})
    }
}
export const getTransactions = async(req,res) => {
    try {
        const transactions = await TRANSACTION.find({
            $or: [{sender: req.user.id}, {receiver: req.user.id}]
        })
        .populate("sender", "userName phone")    //populate to see what data you want to of the sender as well as the receiver
        .populate("receiver", "userName phone")
        .sort({date: -1})    //latest first, descending order
        res.json(transactions)
    } catch (error) {
        res.status(500).json({m:"Server Error", err: error.message})
    }
}

export const recharge = async(req,res) => {
    try {
        const{phone, amount} = req.body
        const user = await USER.findById(req.user.id)

        if(user.balance < amount) {
            return res.status(400).json({m:"Insufficient Balance"})
        }
        user.balance -= amount
        await user.save()
        
        const transaction = new TRANSACTION({
            sender: USER.id,
            receiver: USER.id, 
            amount,
            type: "recharge"
        })
        
        await transaction.save()
        return res.status(201).json({m:`Recharge Successful for ${phone}`, transaction})
    } catch (error) {
        return res.status(500).json({m:"Server Error", err: error.name})
        
    }
}
export const bill = async(req,res) => {
    try {
        const{biller, amount} = req.body
        const user = await USER.findById(req.user.id)

        if(user.balance < amount) {
            return res.status(400).json({m:"Insufficient Balance"})
        }
        user.balance -= amount
        await user.save()
        
        const transaction = new TRANSACTION({
            sender: USER.id,
            receiver: USER.id, 
            amount,
            type: "bill"
        })
        
        await transaction.save()
        return res.status(201).json({m:`Recharge Successful for ${biller}`, transaction})
    } catch (error) {
        return res.status(500).json({m:"Server Error", err: error.name})
        
    }
}
export const insuaranceService = async(req,res) => {
    try {
        const{policyHolder, amount} = req.body
        const user = await USER.findById(req.user.id)

        if(user.balance < amount) {
            return res.status(400).json({m:"Insufficient Balance"})
        }
        user.balance -= amount
        await user.save()
        
        const transaction = new TRANSACTION({
            sender: USER.id,
            receiver: USER.id, 
            amount,
            type: "Insuarance"
        })
        
        await transaction.save()
        return res.status(201).json({m:`Insuarance Successful for ${policyHolder}`, transaction})
    } catch (error) {
        return res.status(500).json({m:"Server Error", err: error.name})
        
    }
}

export const payMerchant = async(req,res) => {
    try {
        const{merchantId, amount, pin} = req.body
        const user = await USER.findById(req.user.id)
        const merchant = await Merchant.findById(merchantId)
        if(!merchant) return res.status(400).json({m:"Merchant not found"})
            
        if(user.balance < amount) {
            return res.status(400).json({m:"Insufficient Balance"})
        }    

        user.balance -= amount
        merchant.balance += amount

        await user.save()
        await merchant.save()

        const transaction = new TRANSACTION({
            sender: user._id,
            receiver: merchant._id,
            amount,
            type: "merchant",
            status: "success"
        })
        await transaction.save()
        return res.status(201).json({m:`Payment of ₹${amount} to ${merchant.shopName} successful`, transaction})
    } catch (error) {
        return res.status(500).json({m:"Server Error", err: error.name})        
    }
}