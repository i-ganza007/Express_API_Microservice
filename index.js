const express = require('express')
const http = require('http')
const {router}  = require('./router/router')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

const app = express()
const server = http.createServer(app)
// mongoose.connect(process.env.URL_STRING,{useNewUrlParser:true})



app.use(express.json())
app.use(router)
app.use((req,res,next)=>{
    res.send('Not found route')
})


server.listen(4000,()=>{
    console.log('Server Active')
})