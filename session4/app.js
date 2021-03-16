//npm init =>initialize npm 
//npm i pkg
//npm i
//npm i -g nodemon
//nodemon app.js
// const myFs = require('fs')
// myFs.writeFileSync('test.js', 'function hello(){console.log(\'say hello\')};module.exports={hello}')
// const _play = require('./test.js')
// _play.hello()
// const validator = require('validator')
// console.log(validator.isAlphanumeric('jhgbv66'))
// if(process.argv[2]=='a') console.log('a inserted')
// else console.log('another value')

//yargs
const yargs = require('yargs')
yargs.command({
    command:'add',
    describe: 'add data',
    handler: function(){
        console.log('inside yargs command')
    }
})

//node app getFullName --fname=marwa --lname=radwan
yargs.command({
    command:'getFullName',
    describe:'handel user name in termiinal', 
    builder:{
        fname:{
            describe:'get user first name',
            type:'string',
            demandOption:true
        },
        lname:{
            describe:'get user first name',
            type:'string'    
        }
    },
    handler: function(argv){
        // console.log(argv)
        console.log(`your full name is ${argv.fname} ${argv.lname}`)
    }   
})

yargs.argv









