const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const auth = async(req, res, next)=>{
    try{
        const token = req.header('Authorization').replace('Bearer ','')
        const decodedToken = jwt.verify(token, 'myKey')
        const user = await User.findOne(
            {_id:decodedToken._id, 'tokens.token':token}
        )
        if(!user) throw new Error()
        req.token = token
        req.user = user
        next()
    }
    catch(e){
        res.status(500).send({
            data: 'not authorized'
        })
    }
}

module.exports = auth