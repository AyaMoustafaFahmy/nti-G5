const express=require('express')
const router = new express.Router()
const postModel = require('../models/post.model')
const auth = require('../middleware/auth')
// add post
router.post('/addPost', auth, async(req,res)=>{
    try{
        const newPost = new postModel({
            ...req.body,
            userId:req.user._id
        })
        await newPost.save()
        res.status(200).send({
            apiStatus: true,
            data: newPost,
            message:'user post added'
        })
    }
    catch(error){
        res.status(500).send({
            apiStatus: false,
            data: error.message,
            message:'user register error'
        })
    }
})
//get user posts
router.get('/posts',auth, async(req,res)=>{
    let match = {}
    let sort ={}
    if(req.query.postId) match.content = req.query.content
    if(req.query.sortBy){
        const part = req.query.sortBy.split(':')
        sort[part[0]] = part[1]=='desc'?-1:1
    }
    try{
        await req.user.populate({
            path:'Posts' ,
            match,
            options:{
                limit:parseInt(req.query.limit),
                skip:(parseInt(req.query.page)*parseInt(req.query.limit)),
                sort
            }
        }).execPopulate()
        res.send(req.user.Posts)
    }
    catch(error){
        res.status(500).send({
            apiStatus: false,
            data: error.message,
            message:'user register error'
        })
    }
})
// share friend post
// remove his post
// edit his post
// like post
// comment on post
// remove like 
// remove comment
// show friend profile
module.exports = router