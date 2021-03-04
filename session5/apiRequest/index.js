const data = require('./data')

data.getdata('albums',(error, result)=>{
    if(error) console.log(error)
    else console.log(result)
})
