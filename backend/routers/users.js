const express = require("express")
const router = express.Router()
const User = require("../models/User")
const auth = require("../middleware/auth")
router.post('/signup',async (req,res)=>{
    const userData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email:req.body.email,
        phone:req.body.email,
        userName:req.body.userName,
        password:req.body.password,
        guardianEmail: req.body.guardianEmail
    }
   const user = User(userData)
   try{
    if(!user){
        return res.status(460).json(
          {
              success:false,
              message:"can't create user"
          }
        )
     }
     
     await user.save()
     
     const token = await user.generateAuthToken();
     res.header("auth-token",token).json({
         success:true,
         jwt:token
     })
   }catch(error){
       res.status(500).json({
           success:false,
           message:error
       })
   }
   


})

router.post('/login',async (req,res)=>{
    const userName = req.body.userName
    const password = req.body.password
    try{
        const user = await User.findByCredentials(userName,password);
        if(!user){
            res.status(404).json(
                {
                    success:false,
                    message:"login failed"
                }
            )
        }
        
        const token = await user.generateAuthToken()
        
        res.cookie('access_token',token,{
            httpOnly:true,
            secure:process.env.NODE_ENV === "production"
        })
        res.status(200).header("p-auth-token",token).json({
            success:true,
            jwt:token
        })
    }catch(error){
        res.json({
            success:false,
            message:error
        })
    }
    
})

router.get('/logout',auth,async (req,res)=>{
    
    try{
    //    const user = await User.findById(req.user._id)

       req.user.tokens = req.user.tokens.filter((token)=>{
           return token!== req.token
       })
       //console.log(user.tokens)//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjg4ZWU0YTM5YTMyZmI4YmU2N2Y3YjgiLCJpYXQiOjE2NTMxNDEwNjZ9.o_CNdq6V-fA29WTnyF0p7UBd7skJDYlNd10RvYLwQDU
       await req.user.save()
       res.clearCookie('access_token')
       res.json({
           success:true,
           message:"logged out"
       })
    }catch(err){
       res.json({
           success:false,
           error:err
       })
    }
})

router.get('/posts',auth,async (req,res)=>{
    const user = req.user
    try{
       
       const posts = (user.posts)
       
       const postArr = []
       posts.forEach(element => {
           postArr.push(element.post);
       });
       res.json({
           success:true,
           posts:postArr
       })

    }catch(err){
      res.send(err)
    }
})

router.post('/posts',auth,async (req,res)=>{
    const userid = req.user._id
    const post= req.body.post
 
    try{
        const user = await User.findById(userid);
        
        // await user.updateOne({ $push: { posts: post } });
        user.posts = await user.posts.concat({post})
        await user.save()
        
       res.json({
           success:true,
           message:"post saved"
       })
    }catch(err){
       res.json({
           success:false,
           message:err
       })
    }

})

module.exports = router