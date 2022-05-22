const mongoose = require("mongoose")
const jwt = require("jsonwebtoken");
const res = require("express/lib/response");
require("dotenv").config();

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        minlength:1,
        maxlength:100,
        required:true
    },
    lastName:{
        type:String,
        minlength:1,
        maxlength:100,
    },
    userName:{
        type:String,
        minlength:4,
        maxlength:18,
        required:true,
        unique:true
    },
    password:{
        type:String,
        minlength:6,
        maxlength:100,
        required:true
    },
    email:{
        type:String,
        minlength:6,
        maxlength:100,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        minlength:1,
        maxlength:100,
        requried:true
    },
    
    guardianEmail:{
        type:String,
        required:true
    },
    posts:[{
        post:{
            type:String
        }
    }],
    tokens: [{
        token:{
            type:String,
            required:true
        }
    }]
})

userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({_id:user._id},process.env.JWT_SECRET)
    
    user.tokens = user.tokens.concat({token})
    
    await user.save()
    return token
}
userSchema.methods.addPost =async function(post){
    const user = this
    await user.updateOne({ $push: { posts: post } });
    await user.save()
    return user.posts
}
userSchema.statics.findByCredentials = async (userName,password)=>{
    try{
        const user = await User.findOne({userName,password})
        if(!user){
            throw new Error("Unable to login")
        }
        return user
    }catch(error){
       return null
    }
}

const User = mongoose.model('User',userSchema)
module.exports = User