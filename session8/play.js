const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/session8', {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology:true
})

//doctors => name, spcialize
const Doctor = mongoose.model('Doctor', {
    name:{
        type: String,
        trim:true,
        required:true,
        unique:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('invalid email')
            }
        }
    },
    spcialize:{
        type:String, 
        required:true
    }
})

const doctorData = new Doctor({ spcialize:'doctor'})
doctorData.save()
.then(()=>console.log('inserted'))
.catch(err=>console.log(err.message))
