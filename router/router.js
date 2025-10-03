const dotenv = require('dotenv')
dotenv.config()
const bcrypt = require('bcrypt')
const router = require('express').Router()
// Use the generated Prisma client output (schema.prisma has `output = "../generated/prisma"`)
const { PrismaClient } = require('../generated/prisma')
const prisma = new PrismaClient()
const {User,Board,Task,SubTask} = require('../models/schema')

router.get('/start',(req,res)=>{
    res.send('Router Setup')
})


router.post('/create/users',async (req,res)=>{
    const {error,value} = User.validate(req.body)
    if(error){
        return res.status(400).send(`Error Validating ${error}`)
    }
    const hashed_password = await bcrypt.hash(value.password, 10)
    console.time('Creating Users')
    try {
        let data = await prisma.user.create({
        data:{...value,password:hashed_password}
        })   
        console.timeEnd('Creating Users')
        console.log(data)
        return res.status(201).json({id: data.id, username: data.username, email: data.email})
    } catch (error) {
        console.error(error)
        return res.status(500).send(`Error Occured ${error}`)
    }
})

// // graceful shutdown for Prisma client
// process.on('SIGINT', async () => {
//     try { await prisma.$disconnect() } catch (e) { /* ignore */ }
//     process.exit(0)
// })

module.exports = {router}