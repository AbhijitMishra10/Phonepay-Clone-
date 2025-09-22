import TRANSACTION from "../models/transaction.model.js";

export const getRewards = async(req,res) => {
    try{
        const rewards = await TRANSACTION.find({
            sender: req.user.id,
            cashback: {$gt: 0}
        }).sort({date: -1})

        res.json(rewards)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}