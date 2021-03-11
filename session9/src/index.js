const express = require('express')
require('./db/connection')
const userRoutes = require('./routes/user.route')
const bookRoutes = require('./routes/book.route')
const app = express()
app.use(express.json())
app.use(userRoutes)
app.use(bookRoutes)
//password bcrypt
// const bcryptjs = require('bcryptjs')
// async function x(){
//  let pass = '123456'
//  z = await bcryptjs.hash(pass, 12)
//  console.log(z)
//  ismatch = await bcryptjs.compare(pass, z)
//  console.log(ismatch)
// }
// x()

//token
// function generateToken(){
// const jwt = require('jsonwebtoken')
// const token = jwt.sign({_id:1}, 'tokenKey')
// console.log(token)
// const data = jwt.verify(token, 'tokenKey')
// console.log(data)
// }
// generateToken()
app.listen(3000)