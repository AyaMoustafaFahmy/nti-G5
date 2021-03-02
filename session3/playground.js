//clousers
// const val = ( c = 0 )  =>{
//     return {
//         c,
//         inc(){c++},
//         dec(){c--},
//         suma(){console.log(c)},
//         getSum(){return c}
//     }
// }

// let myCall = val(10)
// console.log(myCall.getSum())
// start   add(5)  a= adder(10)   a.add(4) a.add(6) a.start

// const adder = (start) =>{
//     return{
//         start,
//         add(x){ start += x},
//         getSummary(){console.log(`start = ${start}`)}
//     }
// }

// let myAdder = adder(10)
// myAdder.getSummary()
// myAdder.add(50)
// myAdder.getSummary()


//callback

// setTimeout(()=>{
//     x=5
// }, 2000)
// console.log(x)
//function myCB(num,cb){
// const myCB = (num, cb)=> {
//     setTimeout(()=>{
//         if(typeof num=="number"){ cb(num, false) }
//         else{ cb(false, 'must be number') }
//     },1500)
// }

// myCB("10", (data,error)=>{
//     if(error) {
//         console.log(error) 
//     }
//     else console.log(data)
// })

//promise
const myPromise = (val) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            typeof val == 'number'? resolve(val) : reject('error must be number')
        },2000)
    })
}


//async await
//async function myCall(){}
const myCall = async()=>{
try{
    x=  await myPromise(5)
    console.log(x)
}
catch(e){
    console.log(e)
}
}
myCall()









// myPromise("hello")
// .then(
//     (response)=>{
//         console.log(response)
//     }
// ).catch(
//     (e)=>{console.log(e)}
// )

































