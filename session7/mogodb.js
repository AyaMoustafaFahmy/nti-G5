// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const {MongoClient, ObjectID} = require('mongodb')
// console.log(new ObjectID('60473e286a75e4415462f4fa'))
const dbServer = 'mongodb://127.0.0.1:27017'
const dbName = 'g5firstApp'
MongoClient.connect(dbServer,
    {useNewUrlParser:true, useUnifiedTopology:true}, 
    (error, client)=>{
    if(error) { return console.log('error in db connection')}
    const db = client.db(dbName)
// insertMany([]) // insert({} or [])
    // db.collection('test').insertOne(
    //         {data:'test'}
    // , (err, res)=>{
    //     if(err) return console.log('error inserting data')
    //     console.log(res.ops)
    // })

    //query to find data
    // db.collection('test').find().toArray((err, result)=>{
    //     console.log(result)
    // })
    
// db.collection('test').findOne({_id:new ObjectID('604737d47625e2262cf312bd')},(err, result)=>{
//     console.log(result)
// })

//edit data
// db.collection('test')
// .updateOne(
//     {_id:new ObjectID('604737d47625e2262cf312bd')}
//     ,{ $set:{ age:40 }
//     }).then(response=> console.log(response))
//     .catch(err=>console.log(err))
// db.collection('test').updateMany({data:'x'}, {$inc:{age:1}, $set:{name:'ahmed'}})
// .then(res=> console.log(res.modifiedCount))
// .catch(err=>console.log(err))

//delete document
db.collection('test').deleteMany({data:"x"})
.then(res=>console.log(res))
.catch(err=>console.log(err))
})


