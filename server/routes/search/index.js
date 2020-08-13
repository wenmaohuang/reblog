// const express = require('express')
// let router = express.Router()

var express = require('express')
var router = express.Router()
// const request = require('request')

// console.log(request,'eee');

router.get("/",(req,res)=>{
 

    console.log('aaaa');
    // console.log(req,'iii');
    let {word} = req.query;
    // if (word){
    //     request.get(
    //         'https://www.baidu.com/sugrec?prod=pc&wd='+word+'&cb=lyj'
    //         ,(err,a,body)=>{
    //             if (err){
    //                 res.send([]);
    //                 return;
    //             }

    //             let str = body.match(/^[\da-z_]+\((.+)\)$/i)[1];
    //             // str = JSON.parse(str);
    //             if (str.g){
    //                 /*let dataArr = [];
    //                 str.g.forEach(item=>{
    //                     dataArr.push(item.q);
    //                 });*/
    //                 console.log('bbb');
    //                 res.send(
    //                     str.g.map(item=>item.q)
    //                 );
    //             }else{
    //                 res.send([]);
    //             }
    //         }
    //     );
    // }else{
    //     res.send([]);
    // }
});

// module.exports = router
module.exports = router
