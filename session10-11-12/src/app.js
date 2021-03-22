const express = require('express')
require('./db/mongoose')
const cors = require('cors')
const userRoutes = require('./routes/user.routes')
const postRoutes = require('./routes/post.routes')
const app = express()
app.use(cors())
app.use(express.json())
app.use(userRoutes)
app.use(postRoutes)
module.exports = app

