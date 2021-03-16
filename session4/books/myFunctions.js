const fs = require('fs')
const readFile = function(){
    try{    
        books = JSON.parse(fs.readFileSync('books.json'))
    }
    catch(e){
        books = []
    }
    return books
}
const writeFile = function(books){
    fs.writeFileSync('books.json', JSON.stringify(books))
}
const addNewBook=function(book){
    books= readFile()
    books.push(book)
    writeFile(books)
}
const showAll = function(){
    books= readFile()
    console.log(books)
    books.forEach(book => {
        console.log(`book name: ${book.title} and author is ${book.author}`)
    });
}
const deleteBook = function(bookTitle){
    let books = readFile()
    index = books.findIndex(book=>{
        return book.title == bookTitle
    })
    if(index==-1) console.log('book not found')
    else
    {
        books.splice(index, 1)
        writeFile(books)
        console.log('deleted')
    }
}
const editBook = function(bookTitle, newData){
    let books = readFile()
    index = books.findIndex(book=>{
        return book.title == bookTitle
    })
    if(index==-1) console.log('book not found')
    else
    {
        books[index] = newData
        writeFile(books)
    }
}

module.exports = {addNewBook, showAll, deleteBook, editBook}