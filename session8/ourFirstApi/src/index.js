const express= require('express')
require('./db/connection')
const User = require('./models/user')
const app = express()

const PORT = 3000
app.use(express.json())

app.post('/register', (req,res)=>{
    const user = new User(req.body)
console.log(req.body)
    user.save()
    .then(()=>{
        res.send({
        apiStatus:true,
        data:user,
        message:'user added successfully'
    })})
    .catch(err=> res.send({
        apiStatus:false,
        data:'',
        message:err.message
    }))
})

app.listen(PORT)