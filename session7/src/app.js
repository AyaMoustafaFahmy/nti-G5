const express = require('express')
const hbs = require('hbs')
const path = require('path')
const app = express()

app.set('view engine', 'hbs')
//public => static files
const publicDir = path.join(__dirname, '../staticFiles')
app.use(express.static(publicDir))

//views
const viewsDir = path.join(__dirname, '../template/views')
app.set('views', viewsDir)

//partials - layouts
const partials = path.join(__dirname, '../template/layouts')
hbs.registerPartials(partials)

app.get('', (req,res)=>{
    res.render('x.hbs')
})
app.listen(3000)
