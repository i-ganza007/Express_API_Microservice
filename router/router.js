const router = require('express').Router()

router.get('/start',(req,res)=>{
    res.send('Router Setup')
})

module.exports = {router}