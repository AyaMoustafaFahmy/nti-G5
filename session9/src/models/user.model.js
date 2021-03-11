const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const userSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error('invalid email')
        }
    },
    password:{
        type:String,
        trim:true,
        required:true,
        minlength:6
    },
    age:{
        type:Number,
        default:21,
        validate(value){
            if(value<21) throw new Error('too small')
        }
    }, 
    status:{
        type: Boolean,
        default:false
    }
})
//encrypt pass
userSchema.pre('save', async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 12)
    }
    next()
})
//login
userSchema.statics.loginUser = async(email, password)=>{
    const user = await User.findOne({ email })
    if(!user) throw new Error('user not found')
    const isValidPass = await bcrypt.compare(password, user.password)
    if(!isValidPass) throw new Error('invalid password')
    return user
}
const User = mongoose.model('User', userSchema)
module.exports=User