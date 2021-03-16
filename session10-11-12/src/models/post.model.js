const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    content:{type:String, trim:true, required:true},
    image:{type:String, default:null},
    video:{type:String,default:null},
    numOfLikes:{type:Number, default:0},
    numOfShares:{type:Number, default:0},
    comments:[
        {
            details:{
                type:String
            },
            userId:{
                type: mongoose.Schema.Types.ObjectId,
                required:true,
            }
        }
    ]
    },
    {timestamps:true}
    )

const Post = mongoose.model('Post', postSchema)
module.exports = Post