const mongoose = require('./connection/connection')

let articleInfo = mongoose.model('articleInfo',new mongoose.Schema({
    tags:[String],
    num:Number
}))
// articleInfo.create({
//     tags:['全部文章','HTML&CSS','JavaScript','Node',"Vue&React","Mongoose","Express",'Other'],
//     num:100
// })
// console.log(1);
console.log('这是文章信息');
module.exports = articleInfo