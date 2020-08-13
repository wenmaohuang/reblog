const express = require("express")
var article = require('../../db/article')

const articlemessageDB = require("../../db/articlemessage.js")
let router = express.Router()
router.post("/messageCommit",(req,res)=>{
    let {user,content} = req.body;
    console.log(req.body,'aa')
    console.log(user,'bb')
    console.log(content,'cc')
  
    /*验证数据*/
    if (!user || !content ){
      res.send({
        code : 1,
        msg : "数据格式错误"
      });
      return;
    }
  
    /*添加评论*/
    articlemessageDB.create({user, content})
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
          msg : "服务器错误~"
        });
      })


     

      
  });


  router.post("/childmessageCommit",(req,res)=>{
    let {parentId,user,content,reUser} = req.body;
  console.log(req.body,'mm');
    //验证数据
    if (!parentId || !user || !content || !reUser){
      res.send({
        code : 1,
        msg : "数据格式错误"
      });
      return;
    }
  
  
    //查找父留言数据
    articlemessageDB.findById(parentId)
      .then(data=>{
        if (data){
          console.log(data,'oo');
          //父留言存在
          articlemessageDB.updateOne({_id:parentId},{$push:{'children':{user,content,reUser}}})
            .then(d=>{
              res.send({
                code : 0,
                msg : "评论成功！"
              });
            })
        }else{
          //父留言不存在
          res.send({
            code : 2,
            msg : "该条留言已删除…"
          });
        }
      })
      .catch(()=>{
        res.send({
          code : 4,
          msg : "服务器错误~请稍后再试"
        })
      })
  
  });

  router.post("/message",(req,res)=>{
    let {skip,limit} = req.body;
  
    /*拿取数据*/
    articlemessageDB.find({},{},{skip,limit,sort:{date:-1}})
      .populate("comment")
      .populate("children.articlemessage")
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
