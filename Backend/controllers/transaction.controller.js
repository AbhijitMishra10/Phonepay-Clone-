import USER from "../models/user.model.js";
import TRANSACTION from "../models/transaction.model.js";

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
        if(!receiver) {
            return res.status(400).json({m: "Receiver not found"})
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

