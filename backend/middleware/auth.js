const User = require('../models/User')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const auth = async (req,res,next)=>{
    const token = req.headers["p-auth-token"]
    if(!token){
        return res.status(403).json({
            success:false,
            message:"No token"
        })
    }
    try{
       const decoded = jwt.verify(token,process.env.JWT_SECRET) 
       
       const user = await User.findOne({_id:decoded._id,'tokens.token':token})
       if(!user){
           return res.status(403).json({
               success:false,
               message:"token expired"
           })
       }
       req.token = token
       req.user= user
       next()
    }catch(e){
       res.status(503).json({
           success:false,
           
       })
    }
}

module.exports = auth