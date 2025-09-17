import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const Key = process.env.SECRET

const authCheck = (req,res,next) => {
    const checkk = req.headers && req.headers.authorization && req.headers.authorization.split(" ")[0]
    if(!checkk) {
        return res.status(400).json({m:"Major fields are missing"})
    }
    try {
        const token = req.headers.authorization.split(" ")[1]
        const payload = jwt.verify(token, Key)
        req.user = {id: payload.id}
        return next()
    } catch (error) {
        if(error.name === "TokenExpiredError"){
            return res.status(400).json({m:"Token Expired"})
        } else{
            return res.status(400).json({m:"Server Error", err: error.message})
        }
    }
}

export default authCheck