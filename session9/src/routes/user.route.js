const express = require('express')
const User = require('../models/user.model')
const router = new express.Router()
const auth = require('../middleware/auth')
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
        const token = await user.generateToken()
        res.status(200).send({
            apiStatus:true,
            data: {user, token},
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

//all users
router.get('/allusers',auth, async(req, res)=>{
    try{
        const users = await User.find()
        res.send(users)
    }
    catch(e){res.send(e)}
})
module.exports = router