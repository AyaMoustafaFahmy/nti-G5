// id => auto increament
// fname
// lname
// phone => optional
// country => from list
// password
// image
// address array of address
// birthdate
// email
// username
// friends [userid]
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    userId:{type:Number},
    fname:{type:String, required:true, trim:true},
    lname:{type:String, required:true, trim:true},
    phone:{
        type:String,
        trim:true,
        //match:/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
    },
    country:{
        type:String,
        required:true,
        trim:true,
        enum:['egypt', 'palstine', 'canda', 'iraq']
    },
    password:{
        type:String,
        required:true,
        trim:true
    }
})

userSchema.pre('save', async function(next){
    lastUser = await User.findOne({}).sort({_id:-1})
    user = this
    //check on update
    if(!lastUser) user.userId=1
    else user.userId = lastUser.userId+1    
    
    if(user.isModified(password)){
        user.password = await bcrypt(user.password, 12)
    }
    next()
})
const User = mongoose.model('User',userSchema)
module.exports=User