// const request = require('request')
// const url = `https://jsonplaceholder.typicode.com/albums`
// request( { url, json:true }, (error, {body} )=>{ //(err, res)
//     if(error) console.log(error.message) 
//     else console.log(body) //res.body
// })
const https = require('https')
const url = `https://jsonplaceholder.typicode.com/albums`
const myRequest = https.request(url, (response)=>{
    let data = '' 
    response.on('data', (chunk)=>{
        data = data + chunk.toString()
    })
    response.on('end',()=>{
        const body = JSON.parse(data)
        console.log(body)
    })
})
myRequest.on('error', (error)=>console.log('error'))
myRequest.end()

