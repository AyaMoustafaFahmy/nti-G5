// var x = 5
// let y = 3
// const z =6

// const pi = 3.14
// const monthsCount=12
// function hello(){
//     var x=10
//     let y =7
//     console.log(x)
//     console.log(y)
//     console.log(z)
// }

// hello()
// var x=10
// //    let y =7
// console.log("x = ", x, " y= ", y)

/*
operators
 - mathmetical + - * ** /
 - comparison > < == === ! != !== >= <= 
 - ternary ?
 - shorthand or equailty or assigining = += -= *= /= 
  -logical && || !
- template string 
  stataments:
  - if else switch 
  loops
  - for foreach while do 
  data structures
  - array objects
*/
// x=5
// x=false
// x="marwa"
// y = 5+3 // 5-3 3*5 9/2

// x=5
// x==5 ? console.log("true") : console.log("false");

// let name = "marwa radwan"
// console.log(`my name is ${name} and say hello`)
//break continue
// x=0
// for(;;){
//     x++
//     if(x==15)break
//     else if(x==5 || x==10) continue
//     console.log(x)
// }
// while(true){}


// temp  - convertiontype c=> f  f=>c 
// 50 c     60 f 
//c = (f-32)*5/9   




/*
(year + 9 )%12
function => hold one function
- get input from user => function
- find mod
- return value
*/
// let year = parseInt(prompt('please enter your year of birth : '))

// function getMyBorg(year){
//     let z = ["Goat","Monkey","Rooster","Dog","Pig","Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse"]
//     console.log(z[((year+9)%12)])    
// }

function getInputFromUser(msg){
    result = prompt(msg)
    return result
}

function convertToNum(num){
    num = Number(num)
    if(isNaN(num)) return 'invalid year of birth'
    return num
}
let yob = getInputFromUser('please enter your year of birth : ')
number = convertToNum(yob)
let z = ["Goat","Monkey","Rooster","Dog","Pig","Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse"]
console.log(z[((number+9)%12)])    




































