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
// function getInputFromUser(msg){
//     result = prompt(msg)
//     return result
// }
// function convertToNum(num){
//     num = Number(num)
//     // if(isNaN(num)) return false
//     return num
// }
// let yob = getInputFromUser('please enter your year of birth : ')
// number = convertToNum(yob)
// let z = ["Goat","Monkey","Rooster","Dog","Pig","Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse"]
// number?console.log(z[((number+9)%12)]):console.log('enter valid yob') 

// var1 = 1
// let var3=33
// if(true){
//     console.log(var1)
//     let var2=2
//     console.log(var2)
//     if(true){
//         let var3=3
//     }
// }
// if(true){
//    let var3=5
// }
// console.log(var3)

// let sum = function(x=0,y=0){
//     return x+y
// }
// let sum2 = (x,y) => {
//     return x+y
// }
// function sum1(x,y){
//     return x+y
// }

// console.log(sum(5))


let arr = [1,2,3,4,5,6,7]
// for(i=0; i<arr.length;i++){
//     console.log(arr[i])
// }
// arr.forEach((element, uu)=>{
//     console.log(`${uu} --> ${element}`)
// })
// z = arr.findIndex(element=>{
//     return element==115
// })
// console.log(z)

// books = [
//     "book 1",
//     "book 2",
//     "book 11",
//     "book 52"
// ]
// //console.log("book 2".includes('/'))

// res = books.filter(book=>{
//     return book.includes('2')
// })
// console.log(res)




// user = {
//     name:"mazen",
//     age:39,
//     job:"doctor"
// }
// console.log(user.name)

users = [
    {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
    lat: "-37.3159",
    lng: "81.1496"
    }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
    }
    },
    {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
    street: "Victor Plains",
    suite: "Suite 879",
    city: "Wisokyburgh",
    zipcode: "90566-7771",
    geo: {
    lat: "-43.9509",
    lng: "-34.4618"
    }
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
    name: "Deckow-Crist",
    catchPhrase: "Proactive didactic contingency",
    bs: "synergize scalable supply-chains"
    }
    },
    {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
    street: "Douglas Extension",
    suite: "Suite 847",
    city: "McKenziehaven",
    zipcode: "59590-4157",
    geo: {
    lat: "-68.6102",
    lng: "-47.0653"
    }
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
    name: "Romaguera-Jacobson",
    catchPhrase: "Face to face bifurcated interface",
    bs: "e-enable strategic applications"
    }
    },
    {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
    street: "Hoeger Mall",
    suite: "Apt. 692",
    city: "South Elvis",
    zipcode: "53919-4257",
    geo: {
    lat: "29.4572",
    lng: "-164.2990"
    }
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
    name: "Robel-Corkery",
    catchPhrase: "Multi-tiered zero tolerance productivity",
    bs: "transition cutting-edge web services"
    }
    },
    {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
    street: "Skiles Walks",
    suite: "Suite 351",
    city: "Roscoeview",
    zipcode: "33263",
    geo: {
    lat: "-31.8129",
    lng: "62.5342"
    }
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
    name: "Keebler LLC",
    catchPhrase: "User-centric fault-tolerant solution",
    bs: "revolutionize end-to-end systems"
    }
    },
    {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
    street: "Norberto Crossing",
    suite: "Apt. 950",
    city: "South Christy",
    zipcode: "23505-1337",
    geo: {
    lat: "-71.4197",
    lng: "71.7478"
    }
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
    name: "Considine-Lockman",
    catchPhrase: "Synchronised bottom-line interface",
    bs: "e-enable innovative applications"
    }
    },
    {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
    street: "Rex Trail",
    suite: "Suite 280",
    city: "Howemouth",
    zipcode: "58804-1099",
    geo: {
    lat: "24.8918",
    lng: "21.8984"
    }
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
    name: "Johns Group",
    catchPhrase: "Configurable multimedia task-force",
    bs: "generate enterprise e-tailers"
    }
    },
    {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
    street: "Ellsworth Summit",
    suite: "Suite 729",
    city: "Aliyaview",
    zipcode: "45169",
    geo: {
    lat: "-14.3990",
    lng: "-120.7677"
    }
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
    name: "Abernathy Group",
    catchPhrase: "Implemented secondary concept",
    bs: "e-enable extensible e-tailers"
    }
    },
    {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
    street: "Dayna Park",
    suite: "Suite 449",
    city: "Bartholomebury",
    zipcode: "76495-3109",
    geo: {
    lat: "24.6463",
    lng: "-168.8889"
    }
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
    name: "Yost and Sons",
    catchPhrase: "Switchable contextually-based project",
    bs: "aggregate real-time technologies"
    }
    },
    {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
    street: "Kattie Turnpike",
    suite: "Suite 198",
    city: "Lebsackbury",
    zipcode: "31428-2261",
    geo: {
    lat: "-38.2386",
    lng: "57.2232"
    }
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
    name: "Hoeger LLC",
    catchPhrase: "Centralized empowering task-force",
    bs: "target end-to-end models"
    }
    }
    ]

// users.forEach(user => {
//     console.table(user)
// });
let tableBody = document.querySelector('tbody')
let headers =['id','name','email','phone']
users.forEach(user => {    
    tr = createNewElement('tr', tableBody,
     {'class':'bg-light',width:"50px"})
    headers.forEach(head=>{
        createNewElement('td',tr,null,user[head]) 
    })
});

function createNewElement(elementType,parent ,eleAttributes , innerTxt=null){
    let ele = document.createElement(elementType)
    //<td></td>
    if(eleAttributes!=null){
        let keys = Object.keys(eleAttributes) //['class','width']
        keys.forEach(key=>{
            ele.setAttribute(key,eleAttributes[key])
            //<td class="bg-light" width="50px"></td>
        })
    }
    if(innerTxt!=null) ele.innerText = innerTxt
    //<td class="bg-light" width="50px">marwa</td>
    parent.appendChild(ele)
    return ele
}






























































