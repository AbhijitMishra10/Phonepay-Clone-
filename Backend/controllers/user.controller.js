import USER from "../models/user.model.js";

export const getAll = async(req,res) => {
    try {
        const getALlUsers = await USER.find()
        res.status(201).json({m:"All the users are here", getALlUsers})    
    } catch (error) {
        res.status(500).json({m:"Server Error", err: error.message})      
    }
}
export const getById = async(req,res) => {
    try {
        const userId = req.params.id 
        if(!userId) return res.status(400).json({m:"Id is not provided"})
        const getUsers = await USER.findById(userId)
        if(!getUsers) return res.status(400).json({m:"No users found"})
        res.status(201).json({m:"User By Id:", getUsers})    
    } catch (error) {
        res.status(500).json({m:"Server Error", err: error.message})      
    }
}
export const createUser = async(req,res) => {
    try {
         let result
         if(Array.isArray(req.user)){
            const newUsers = await USER.insertMany(req.body)
            result = newUsers
            res.status(201).json({m:"New Users", result})
         }else {
            const{userName, email, transactionId, totalTransaction} = req.body
            const newUser = new USER({userName, email, transactionId, totalTransaction})
            result = await newUser.save()
         }    
    } catch (error) {
        res.status(500).json({m:"Server Error", err: error.message})      
    }
}
export const updateUserById = async(req,res) => {
    try {
        const userId = req.params.id 
        if(!userId) return res.status(400).json({m:"Id is not provided"})
        const getUsers = await USER.findById(userId)
        if(!getUsers) return res.status(400).json({m:"No users found"})
        const{userName, email, transactionId, totalTransaction} = req.body
        const updatedUser = await USER.findByIdAndUpdate(userId, {userName, email, transactionId, totalTransaction}, {new: true})     
        return res.status(201).json({m:"User updated", updatedUser})
    } catch (error) {
        res.status(500).json({m:"Server Error", err: error.message})      
    }
}
export const deleteUserById = async(req,res) => {
    try {
        const userId = req.params.id 
        if(!userId) return res.status(400).json({m:"Id is not provided"})
        const getUsers = await USER.findById(userId)
        if(!getUsers) return res.status(400).json({m:"No users found"})
        const deletedUser = await USER.findByIdAndDelete(userId)     
        return res.status(201).json({m:"User deleted", deletedUser})
    } catch (error) {
        res.status(500).json({m:"Server Error", err: error.message})      
    }
}