const mongoose = require('mongoose')
const validator =require('validator')

const User = mongoose.model('User',{
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:20,
        trim:true
    },
    age:{
        type:Number,
        required:true,
        validate(value){
            if(value<21) throw new Error('enta lesa so8yr')
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error('email 8lt')
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(value.includes('123')) throw new Error('invalid pass')
        }
    },
    dob:{
        type:Date
    },
    addresses:[
        {
            address: {
                flatNo:{type:Number},
                buildingNo:{type:Number},
                streetName:{type:String},
                city:{type:String},
                country:{type:String},
                addr_type:{type:String}
            }
        }
    ],
    phone:{
        type:String,
        validate(value){
            if(!validator.isMobilePhone(value, ['ar-EG'])) 
                throw new Error('invalid phone')
        }
    }

})

module.exports=User