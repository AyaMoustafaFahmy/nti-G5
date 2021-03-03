const fs = require('fs')
const addNewBook=function(book){
    try{    
        books = JSON.parse(fs.readFileSync('books.json').toString())
    }
    catch(e){
        books = []
    }
    books.push(book)
    fs.writeFileSync('books.json', JSON.stringify(books))
}

module.exports = {addNewBook}