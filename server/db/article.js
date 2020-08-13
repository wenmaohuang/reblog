const mongoose = require('./connection/connection')
// let Schema = mongoose.Schema
// let article = mongoose.model('article',new Schema({
//     type : {type: String,required: true},
//     title : {type: String,required: true},
//     content : {type:String,required: true},
//     tag : {type: String,required: true},
//     year:{type:String,required:true},
//     month:{type:String,required:true},
//     day:{type:String,required:true},
//     updateDate : {type: Date,default: Date.now},
//     date : {type: Date, default: Date.now},
//     readcount:{type:Number,require:true},
//     surface : {type:String,default: 'http://www.fyyd.vip/img/4.jpg'},
//     pv : {type: Number,default: 0},
//     // comment : [{type:Schema.Types.ObjectID,ref:"comment"}]
//     comment:[
//           {type:Schema.Types.ObjectID,ref:'articleMessage'}
//         //   {type:Schema.Types.ObjectID,ref:'users'}
//       ]
// }))


let Schema = mongoose.Schema

let articleSchema = new mongoose.Schema({
  type : {type: String,required: true},
  title : {type: String,required: true},
  content : {type:String,required: true},
  tag : {type: String,required: true},
  year:{type:String,required:true},
  month:{type:String,required:true},
  day:{type:String,required:true},
  updateDate : {type: Date,default: Date.now},
  date : {type: Date, default: Date.now},
  surface : {type:String,default: 'http://www.fyyd.vip/img/4.jpg'},
  pv : {type: Number,default: 0},
  comment:[
        {type:Schema.Types.ObjectID,ref:'articleMessage'}
    ]
})

articleSchema.add({readcount:{type:Number,require:true}})

let article = mongoose.model('article',articleSchema)





















// console.log('这是文章');
// for(let i=0;i<10;i++){
//     article.create({
//         type:['原创','转载'][(Math.random()*2)|0],
//         title:`第${i+1}篇文章`,
//         content:(''+i+i+i+i+'我是文章的内容').repeat(10),
//         tag:['HTML&CSS','JavaScript','Node',"Vue&React",'other'][(Math.random()*5)|0]
//     })
// }


module.exports = article
