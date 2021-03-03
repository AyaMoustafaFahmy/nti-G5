const yargs = require("yargs");
const chalk = require('chalk')
const myMethods = require('./myFunctions')
yargs.command({
    command: 'addBook',
    describe:'add new book',
    builder:{
        title:{ 
            type:'string', 
            demandOption:true
        },
        author:{
            type:'string', 
            demandOption:true
        }
    },
    handler:function(argv){
        let book = {title:argv.title, author:argv.author}
        myMethods.addNewBook(book)
    }
})

yargs.command({
    command:'showAll',
    handler:function(){
        myMethods.showAll()
    }
})
yargs.command({
    command:'delBook',
    builder: {
        title:{type:'string', demandOption:true}
    },
    handler:function(argv){
        myMethods.deleteBook(argv.title)
    }
})
yargs.command({
    command:'editBook',
    builder:{
        title:{type:'string', demandOption:true},
        author:{type:'string', demandOption:true},
        searchKey:{type:'string', demandOption:true}
    },
    handler:function(argv){
        let book = {title:argv.title, author:argv.author}
        myMethods.editBook(argv.searchKey, book)
    }
})

yargs.argv