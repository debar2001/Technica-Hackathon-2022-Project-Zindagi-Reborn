require('dotenv').config()
const express = require("express")
const app = express();
const mongoose = require("mongoose");
var port = process.env.port|3000
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
const db = mongoose.connection
db.on('error',(error)=>console.log(error))
db.once('open',()=>console.log('Connected to Database'))

app.use(express.json())

const userRouter = require('./routers/users')
app.use('/users',userRouter)


app.listen(process.env.PORT||3000,()=>console.log("Server started"))