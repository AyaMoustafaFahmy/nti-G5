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

//get all users
router.get('/allUsersAsync', async(req,res)=>{
    try{
        const users = await User.find({})
        res.status(200).send({ 
            apiStatus:true, 
            data:users, 
            message:'users retrieved successfully'})
    }
    catch(err){
        res.status(500).send({ 
            apiStatus:false, 
            data:'', 
            message:err.message})
    }
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
//delete user
router.delete('/allUsers/:id',async(req, res)=>{
    try{
        id = req.params.id
        const data = await User.findByIdAndDelete(id)
        if(!data) return res.status(404).send('user not found')
        res.status(200).send('deleted')
    }
    catch(e){
        res.status(500).send(e.message)
    }
})
//edit user
router.patch('/allUsers/:id',async(req, res)=>{
    const allowedUpdates = ['name','age','email']
    const userUpdates = Object.keys(req.body)
    const isValid = userUpdates.every(update=>allowedUpdates.includes(update))
    if(!isValid) res.status(500).send('invalid updates')
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body,
            {new:true, runValidators:true})
        if(!user) return res.send('user not found')
        res.send('updated')
    }
    catch(err){
        res.status(500).send(err.message)
    }
})
module.exports = router