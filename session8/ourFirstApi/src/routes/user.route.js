const express = require('express')
const User = require('../models/user.model')
const router = new express.Router()
//register
router.post('/register', (req,res)=>{
    const user = new User(req.body)
    user.save()
    .then( () => {
        res.status(200).send({ apiStatus:true, data:user, message:'user added successfully'})
    })
    .catch( err => 
        res.status(500).send({ apiStatus:false, data:'', message:err.message})
    )
})
//get all users
router.get('/allUsers', (req,res)=>{
    User.find({})
    .then( (users) =>{
        res.status(200).send({ apiStatus:true, data:users, message:'users retrieved successfully'})
    })
    .catch(err=>
        res.status(500).send({ apiStatus:false, data:'', message:err.message})
    )
})
//get single user by id
router.get('/allUsers/:id',(req,res)=>{
    const id = req.params.id
    User.findById(id)
    .then( (user) =>{
        res.status(200).send({ apiStatus:true, data:user, message:'user retrieved successfully'})
    })
    .catch(err=>
        res.status(500).send({ apiStatus:false, data:'', message:err.message})
    )
    
})
module.exports = router