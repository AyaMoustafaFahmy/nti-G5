const express= require('express')
require('./db/connection')
const userRoutes = require('./routes/user.route')
const app = express()
const PORT = 3000
//covert everything to json 
app.use(express.json())
app.use(userRoutes)
app.listen(PORT)