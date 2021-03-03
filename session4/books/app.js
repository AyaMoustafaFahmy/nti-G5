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
        console.log('all')
    }
})
yargs.command({
    command:'delBook',
    handler:function(){
        console.log('delete')
    }
})
yargs.command({
    command:'editBook',
    handler:function(){
        console.log('edit')
    }
})

yargs.argv