// const mongoose = require('mongoose')
const mongoose = require('./connection/connection')

let user = mongoose.model('user',new mongoose.Schema({
    user:{type:String,required:true},
    pwd:{type:String,required:true},
    regDate:{type:Number,default: new Date().getTime()},
    photo:{type:String,default:'/img/2.png'},
    disabled:{type:Boolean,default:false},
    admin:{type:Boolean,default:false}
}))
module.exports = user