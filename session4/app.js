//npm init =>initialize npm 
//npm i pkg
//npm i

const myFs = require('fs')
myFs.writeFileSync('test.js', 'function hello(){console.log(\'say hello\')};module.exports={hello}')
const _play = require('./test.js')
_play.hello()
const validator = require('validator')
console.log(validator.isAlphanumeric('jnbji$^^hhj654gh'))