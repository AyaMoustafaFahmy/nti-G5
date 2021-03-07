//instaled packages
const express = require('express')
const hbs = require('hbs')
const path = require('path')
//custom variables
const PORT = 3000
//create instance from express
const app = express()
//set default engine for dynamic html files
app.set('view engine', 'hbs')
//get public and views and partials paths
const publicDir = path.join(__dirname,'../public')
const viewsDir = path.join(__dirname,'../frontend/views')
const partialsDir = path.join(__dirname,'../frontend/partials')
//set use of public and views and partials paths
app.use(express.static(publicDir))
app.set('views', viewsDir)
hbs.registerPartials(partialsDir)
//routes
app.get('', (req, res)=>{
    res.render('home',{
        pageName: 'home page',
        userName:'marwa radwan'
    })
})
app.get('/allTasks', (req, res)=>{
    res.render('allTasks',{
        pageName: 'All Tasks'
    })
})
app.get('/single', (req, res)=>{
    res.render('singleTask',{
        pageName: 'Single Task'
    })
})
app.get('*', (req, res)=>{
    res.render('404',{
        pageName: '404 error'
    })
})
//run server
app.listen(PORT)










