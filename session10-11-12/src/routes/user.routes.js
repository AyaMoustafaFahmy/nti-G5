const express = require('express')
const router = new express.Router()
const userModel = require('../models/user.model')
const auth = require('../middleware/auth')
const fs = require('fs')
const multer = require('multer')
const adminAuth = require('../middleware/adminAuth')
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// user register
router.post('/register', async(req, res)=>{
    try{
        const user = new userModel(req.body)
        await user.save()
        //send email with activate route
        // msgBody = `welcome to activate account /activate/${user._id}`
        // const msg = {
        //   to: user.email, //user email
        //   from: 'marwa@project.com', //your email
        //   subject: 'Welcome mail',
        //   html: msgBody
        // };
        // //ES6
        // sgMail.send(msg)
        //   .then(() => {}, error => {
        //     console.error(error);
        
        //     if (error.response) {
        //       console.error(error.response.body)
        //     }
        //   });
    

        res.status(200).send({
            apiStatus: true,
            data: user,
            message:'user successfuly registered'
        })
    }
    catch(error){
        res.status(500).send({
            apiStatus: false,
            data: error.message,
            message:'user register error'
        })
    }
} )
// activate account from email
router.get('/activate/:id', async(req, res)=>{
    try{
        const _id= req.params.id
        const user = await userModel.findById({_id})
        if(!user) throw new Error('invalid user id')
        user.accountStatus = true
        await user.save()
        res.status(200).send({
            apiStatus:true,
            data: user,
            message: 'user status updated'
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
// user login multiple devices
router.post('/login',async(req,res)=>{
    try{
        const user = await userModel.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.status(200).send({
            apiStatus:true,
            data:{user, token},
            message:"user logged in"
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
// show profile
router.get('/ ', auth,async(req,res)=>{
    res.send(req.user)
})
// logout
router.post('/logout', auth, async(req, res)=>{
    try{
        req.user.tokens = req.user.tokens.filter((element)=>{
            return element!=req.token
        })
        await req.user.save()
        res.status(200).send({
            apiStatus: true,
            data:'',
            message:'logged out'
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
// logout from all devices
router.post('/logoutAll', auth, async(req, res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.status(200).send({
            apiStatus: false,
            data:'',
            message:'logged out'
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
// deactivate account
router.get('/deactivate',auth, async(req, res)=>{
    try{
        req.user.accountStatus= false
        await user.save()
        res.status(200).send({
            apiStatus:true,
            data: user,
            message: 'user status updated'
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
// remove account
router.delete('/me', auth, async(req,res)=>{
    try{
        await req.user.remove()
        res.status(200).send({
            apiStatus:true,
            data:'deleted',
            message:"deleted"
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
// reset password
router.patch('/user/editPassword', auth, async(req,res)=>{  
try{
    const pass= req.body.password
    req.user.password = pass
   await req.user.save()
    res.send('done')
}
catch(error){
    res.status(500).send({
        apiStatus: false,
        data: error.message,
        message:'user register error'
    })
}
})
// edit profile
router.patch('/user/profile', auth, async(req,res)=>{
    requestedUpdates = Object.keys(req.body)
    allowed=['name', 'password']
    isValid = requestedUpdates.every(update=> allowed.includes(update))
    if(!isValid) return res.send('invalid')
    try{
        requestedUpdates.forEach(update=> req.user[update] = req.body[update])
        await req.user.save()
        res.send('updated')
    }
    catch(e){res.send(e)}
})
// add friend
router.post('/addFriend', auth, async(req, res)=>{
    try{
        const fId = req.body.fId
        const friend = await userModel.findOne({_id: fId})
        if(!friend) throw new Error('invalid friend id')
        req.user.friends = req.user.friend.push(fId)
        await req.user.save()
        res.send('added')
    }
    catch(error){
        res.status(500).send({
            apiStatus: false,
            data: error.message,
            message:'user register error'
        })
    }
})
// remove friends
router.post('/removeFriend',auth, async(req,res)=>{
try{
    req.user.friends = req.user.friends.filter((element)=>{
        return element!=req.body.fId
    })
    await req.user.save()
    res.status(200).send({
        apiStatus: false,
        data:'',
        message:'logged out'
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

// change email with verfication

var upload = multer({ dest: 'images/profile' })
router.post('/profile', auth, upload.single('avatar'), async  (req, res)=> {
    filename=req.file.destination+ '/' + req.file.filename 
    fileWithExt = filename+'.'+ (req.file.originalname.split('.').pop())
    fs.rename(filename, fileWithExt, function(err) {
        if ( err ) console.log('ERROR: ' + err);
    });
    req.user.userProfile= fileWithExt
    await req.user.save()
    res.send(req.user)
})
imgName=''
let storage = multer.diskStorage({
    destination:function(req,res,cb){cb(null, 'images')},
    filename:function(req,file,cb){
        imgName = Date.now()+'.'+file.originalname.split('.').pop()
        cb(null, imgName)
    }
})
var upload1 = multer({storage:storage})
router.post('/upload', auth, upload1.single('img'), async(req,res)=>{
    res.send({name:'images/'+imgName})
})

router.get('/test', adminAuth, (req,res)=>{
    
})
module.exports=router
