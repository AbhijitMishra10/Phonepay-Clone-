import AUTH from "../models/auth.model.js";
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

dotenv.config()
const Key = process.env.SECRET

export const register = async(req,res) => {
    try {
        const{userName,phone, email, password, pin} = req.body
        if(!userName || !email || !password || !pin) {
            return res.status(400).json({m:"Fill the fields first"})
        }
        const existingUser = await AUTH.findOne({email})
        if(existingUser) return res.status(400).json({m:"User already present!"})
        const hashedPass = await bcrypt.hash(password,12)
        const hashedPin = await bcrypt.hash(pin,12)
        const newUser = await AUTH.create({userName,phone, email, password: hashedPass, pin: hashedPin})
        return res.status(201).json({m:"User registered successfully", user: {id: newUser.id, name: newUser.userName,phn: newUser.phone, email: newUser.email}})
    } catch (error) {
        return res.status(500).json({m:"Fill the fields first"})
    }
}
export const login = async(req,res) => {
    try {
        const{email, password, pin} = req.body
        if(!email || !password) {
            return res.status(400).json({m:"Fill the fields first"})
        }
        const existingUser = await AUTH.findOne({email})
        if(!existingUser) return res.status(400).json({m:"No users found!"})
        const isMatch = await bcrypt.compare(password, existingUser.password)
        if(!isMatch) return res.status(400).json({m:"Invalid Credentials"})
        const token = jwt.sign({id: existingUser.id}, Key, {expiresIn: '20m'})
        return res.status(201).json({m:"User logged in",token, user: {id: existingUser.id, name: existingUser.userName, email: existingUser.email}})
    } catch (error) {
        return res.status(500).json({m:"Fill the fields first"})
    }
}