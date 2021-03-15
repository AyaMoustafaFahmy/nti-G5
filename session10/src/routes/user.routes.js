const express = require('express')
const router = new express.Router()
const userModel = require('../models/user.model')
router.get('/all',async(req,res)=>{
    try{
    const users = await userModel.find({})
    res.status(200).send({users})
    }
    catch(e){
        res.send(e)
    }
})
module.exports=router
