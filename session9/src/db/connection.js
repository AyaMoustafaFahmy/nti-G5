const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/booksApi',{
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})