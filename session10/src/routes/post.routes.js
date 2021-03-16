const express=require('express')
const router = new express.Router()
const postModel = require('../models/post.model')
const auth = require('../middleware/auth')
const multer = require('multer')
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
//get my single post
router.get('/post/:id', auth, async(req,res)=>{
    try{
        const _id = req.params.id
        const post = await postModel.findOne({ _id , userId: req.user._id})
        if(!post) throw new Error('invalid post id')
        res.send(post)
    }
    catch(error){
        res.status(500).send({
            apiStatus: false,
            data: error.message,
            message:'user register error'
        })
    }
}) 
// remove his post
router.delete('/post/:id', auth, async(req,res)=>{
    try{
        const _id = req.params.id
        const post = await postModel.findOneAndRemove(
            {   
                _id , 
                userId: req.user._id
            })
        if(!post) throw new Error('invalid post id')
        res.send("deleted")
    }
    catch(error){
        res.status(500).send({
            apiStatus: false,
            data: error.message,
            message:'user register error'
        })
    }

})
// edit his post
router.patch('/post/:id', auth, async(req,res)=>{
    try{
        const _id = req.params.id
        const post = await postModel.findOne({ _id , userId: req.user._id})
// postModel.findOneAndUpdate(
//     {_id, userId:req.user._id}, 
//     {$set:{content:req.body.content}})
        if(!post) throw new Error('invalid post id')
        if(req.body.content) {
            post.content = req.body.content
            await post.save()
        }
        else throw new Error('no content added')
        res.send(post)
    }
    catch(error){
        res.status(500).send({
            apiStatus: false,
            data: error.message,
            message:'user register error'
        })
    }

})
// like post

// comment on post
// remove like 
// remove comment
// show friend profile
// share friend post
module.exports = router