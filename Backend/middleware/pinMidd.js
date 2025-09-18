import USER from "../models/user.model";

const pinnMidd = async(req,res,next) => {
    try {
        const {pin} = req.body
        const user = await USER.findById(req.user.id)

        if(!pin || pin !== user.pin) {
            return res.status(401).json({m: "Invalid Transaction PIN"})
        }
        return next()
    } catch (error) {
        res.status(500).json({m: "Server Error", err: error.message})
    }
}

export default pinnMidd