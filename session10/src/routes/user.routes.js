const express = require('express')
const router = new express.Router()
const userModel = require('../models/user.model')
const auth = require('../middleware/auth')
// user register
router.post('/register', async(req, res)=>{
    try{
        const user = new userModel(req.body)
        await user.save()
        //send email with activate route
        
        res.status(200).send({
            apiStatus: true,
            data: user,
            message:'user successfuly registered'
        })
    }
    catch(error){
        res.status(500).send({
            apiStatus: false,
            data: error.message,
            message:'user register error'
        })
    }
} )
// activate account from email
router.get('/activate/:id', async(req, res)=>{
    try{
        const _id= req.params.id
        const user = await userModel.findById({_id})
        if(!user) throw new Error('invalid user id')
        user.accountStatus = true
        await user.save()
        res.status(200).send({
            apiStatus:true,
            data: user,
            message: 'user status updated'
        })
    }
    catch(error){
        res.status(500).send({
            apiStatus: false,
            data: error.message,
            message:'user register error'
        })
    }
})
// user login multiple devices
router.post('/login',async(req,res)=>{
    try{
        const user = await userModel.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.status(200).send({
            apiStatus:true,
            data:{user, token},
            message:"user logged in"
        })
    }
    catch(error){
        res.status(500).send({
            apiStatus: false,
            data: error.message,
            message:'user register error'
        })
    }
})
// show profile
router.get('/myProfile', auth,async(req,res)=>{
    res.send(req.user)
})
// logout
router.post('/logout', auth, async(req, res)=>{
    try{
        req.user.tokens = req.user.tokens.filter((element)=>{
            return element!=req.token
        })
        await req.user.save()
        res.status(200).send({
            apiStatus: false,
            data:'',
            message:'logged out'
        })
    }
    catch(error){
        res.status(500).send({
            apiStatus: false,
            data: error.message,
            message:'user register error'
        })
    }
})
// logout from all devices
router.post('/logoutAll', auth, async(req, res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.status(200).send({
            apiStatus: false,
            data:'',
            message:'logged out'
        })
    }
    catch(error){
        res.status(500).send({
            apiStatus: false,
            data: error.message,
            message:'user register error'
        })
    }
})

// edit profile
// deactivate account
// remove account
// add friend
// remove friends
// add post
// share friend post
// remove his post
// edit his post
// like post
// comment on post
// remove like 
// remove comment
// show friend profile
// reset password
// change email with verfication

module.exports=router
