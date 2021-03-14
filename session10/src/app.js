const express = require('express')
require('./db/mongoose')
const app = express()
// const userModel = require('./models/user')
// x=new userModel({
//     fname:'marwa', lname:'radwan', phone:"011111111",country:'ggg'
// })
// x.save().then(()=>{}).catch(e=>{console.log(e)})
app.use(express.json())

module.exports = app

