const express = require('express')
const User = require('../models/user.model')
const router = new express.Router()

//register new user
router.post('/addUser', async(req,res)=>{
    const user = new User(req.body)
    try{
        await user.save()
        res.status(200).send({
            apiStatus:true,
            data:user,
            message:'user added successfully'
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            data:e.message,
            message:'invalid operation'
        })
    }
})

//login user
router.post('/login', async (req, res)=>{
    try{
        const user = await User.loginUser(req.body.email, req.body.password)
        res.status(200).send({
            apiStatus:true,
            data: user,
            message:'logged in'
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            data: e.message,
            message:'error login '
        })
    }
})
module.exports = router