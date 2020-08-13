var article = require('../../db/article')
var articleInfo = require('../../db/articleInfo')
const express = require("express")
// const articlemessageDB = require("../../db/articlemessage.js")

let router = express.Router()
router.post('/getInfo', (req, res) => {
  // console.log(req.body,'bb');
    articleInfo.findOne({}, {_id: 0, __v: 0})
        .then(data => {
            // console.log(data,444);
            res.send({
                code: 0,
                msg: '请求成功',
                data
            })
        })
        .catch(() => {
            res.send({
                code: 4,
                msg: '服务器错误',
                data: null
            })
        })

})
router.post('/getHot', (req, res) => {
  // console.log(res,'dd');
    article.find({}, {_id: 0, __v: 0}, {sort: {pv: -1}, skip: 0, limit: 8})
        .then(data => {
            // console.log(data,'cc')
            res.send({
                code: 0,
                msg: '请求成功',
                data
            })
        })
        .catch(() => {
            res.send({
                code: 4,
                msg: "服务器错误",
                data: null
            })
        })
})

router.get('/getTitle', (req, res) => {
  // console.log(res,'dd');
    article.find({})
        .then(data => {
            // console.log(data,'cc')
            res.send({
                code: 0,
                msg: '请求成功',
                data
            })
        })
        .catch(() => {
            res.send({
                code: 4,
                msg: "服务器错误",
                data: null
            })
        })
})

router.post('/getShow', (req, res) => {
    let {skip, limit, tag} = req.body
    let options = tag ? {tag} : {}
    // console.log(skip, limit, tag,'test');
// console.log(request,'eee');
// console.log(req.body,'a!');
// console.log(date- new Date(),'a@');
// console.log(article,'a~');
// let newDate = new Date()
// console.log(res.db,'b,');

    article.find({$and:[options,{pv:{$lt:1}}]}, {__v:0} ,{skip, limit,sort:{readcount:-1,date:-1}})
    .then(data => {
        res.send({
            code: 0,
            data,

        })
    })
    .catch(err => {
        res.send({
            code: 4,
            msg: '服务器错误'
        })
    })

  

   
})

router.post("/readCount",(req,res)=>{
  let {articleId,readcount} =req.body
  console.log(articleId,readcount,'a^');
  if(!articleId || !readcount){
    res.send({
      code : 1,
      msg : "数据格式错误"
    });
    return;
  
  }

  article.updateOne({
    _id: articleId,
  },{
    
    $set:{readcount}
  })
    .then((data)=>{
      res.send({
        code : 0,
        msg : "阅读量加1!",
        data
      });
    })
    .catch(()=>{
      res.send({
        code : 4,
        msg : "服务器错误~",
        data:[]
      });
    })
  
})

router.post("/messageCommit",(req,res)=>{
    let {articleId,comment} = req.body;
    // console.log(req.body,'eee')
   
// console.log(request,'eee');
  
    /*验证数据*/
    if (!articleId || !comment){
      res.send({
        code : 1,
        msg : "数据格式错误"
      });
      return;
    }
    // console.log(article.comment);
    /*添加评论*/
    article.updateOne({
      _id: articleId,
    },{
      
      $push:{comment}
    })
      .then((data)=>{
        res.send({
          code : 0,
          msg : "留言成功!",
          data
        });
      })
      .catch(()=>{
        res.send({
          code : 4,
          msg : "服务器错误~",
          data:[]
        });
      })

      // article.updateOne({content:'xxx'})
      // .then(()=>{
      //   res.send({
      //     code : 0,
      //     msg : "留言成功!"
      //   });
      // })
      // .catch(()=>{
      //   res.send({
      //     code : 4,
      //     msg : "服务器错误~"
      //   });
      // })

      
  });


  

      


  router.post("/message",(req,res)=>{
    let {skip,limit} = req.body;
  
    /*拿取数据*/
    article.find({},{},{skip,limit,sort:{date:-1}})
      .populate({path:"comment",populate:{path:"user"}})
      .populate({path:"children.comment",populate:{path:"user"}})
      .then(data=>{
        res.send({
          code : 0,
          msg : "请求成功",
          data
        });
      })
      .catch(()=>{
        res.send({
          code : 4,
          msg : "服务器错误",
          data : []
        });
      })
  });

module.exports = router
