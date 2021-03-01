//objects
// let user = {
//     name: "marwa",
//     yob: 1985,
//     getAge: function(year){
//         return year-this.yob
//     }
// }

// let keys = Object.keys(user)
// console.log(keys)
// let values = Object.values(user)
// console.log(values)
// console.log(user.getAge(2021))

// var x=5

// function test(x){
//     x*=15
// }
// test(x)
// console.log(x)

// let obj = {
//     x:5, y:3
// }

// function test1(myObj){
//     myObj.x=10
//     myObj.y=15
// }
// console.log(obj)
// test1(obj)
// console.log(obj)
/*
account => name, balance
addbalance => +balance
reset => balance=0
*/
/*
userAcc => name, balance, addBalance, withdraw, transactions = [
    {transType:'withdraw, bal:1000},
]
get summary
*/
// userAccount = {
//     name: "marwa",
//     balance:1000,
//     transactions : []
// }
// function addBalance(acc, newBal){
//     acc.balance+=newBal
//     transaction = { transType: 'add new Balance', balanceVal : newBal }
//     acc.transactions.push(transaction)
// }
// function withdraw(acc, newBal){
//     acc.balance-=newBal
//     transaction = { transType: 'withdraw Balance', balanceVal : newBal }
//     acc.transactions.push(transaction)
// }
// function getSummary(acc){
//     acc.transactions.forEach(trans=>{
//         console.log(`${trans.transType} with ${trans.balanceVal}`)
//     })
//     console.log(`user: ${acc.name} has ${acc.balance} EGP`)
// }

// addBalance(userAccount,500)
// addBalance(userAccount,900)
// withdraw(userAccount, 700)
// addBalance(userAccount,500)
// addBalance(userAccount,600)
// addBalance(userAccount,300)
// withdraw(userAccount,600)
// getSummary(userAccount)
/*
student={name, numOfExams:0, numOfSuc:0, numOfFails:0}
addexamResult(val) => val>50 numOfSuc+1 else numOfFails+1 numofExams+1
summary  
*/
students = [
    {
    id:1,
    name:'marwa1',
    numOfExams:0,
    numOfFails:0,
    numOfSuccess:0
},
{
    id:2,
    name:'marwa2',
    numOfExams:0,
    numOfFails:0,
    numOfSuccess:0
},
{
    id:3,
    name:'marwa3',
    numOfExams:0,
    numOfFails:0,
    numOfSuccess:0
}
]
function addExamResult(student, degree){
    student.numOfExams+=1;
    (+degree) >= 50 ? student.numOfSuccess+=1 : student.numOfFails+=1;
}
sId = Number(prompt('enter id'))
ind = students.findIndex( s => {
    return s.id  == sId
})  
while(true){  
    d=prompt(`enter ${students[ind].name} degree`)
    if(d=="exit") break
    addExamResult(students[ind], d)
}
console.log(students)


















