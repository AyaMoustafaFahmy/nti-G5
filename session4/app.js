//npm init =>initialize npm 
//npm i pkg
//npm i
//npm i -g nodemon
//nodemon app.js


const myFs = require('fs')
// myFs.writeFileSync('test.js', 'function hello(){console.log(\'say hello\')};module.exports={hello}')
const _play = require('./test.js')
// _play.hello()
const validator = require('validator')
console.log(validator.isAlphanumeric('jhgbv66'))