const express = require('express')
const svgCaptcha = require('svg-captcha')
const userDB = require('../../db/user')
let router = express.Router()

router.post('/vcode', (req, res) => {
    // console.log(req.session,33);
    if (req.session.registerVCodeTime) {
        // let _t = new Date - new Date(req.session.registerVCodeTime)
        // if (_t <= 60000) {
        //     res.send({
        //         code: 2,
        //         data: req.session.registerVCode.data,
        //         msg: "请求过于频繁",
        //         time: 60000 - _t
        //     });
        //     return;
        // }
        let _t = new Date() - req.session.registerVCodeTime
        if(_t <= 60000){
            res.send({
                code:2,
                data:req.session.registerVCode.data,
                msg: "请求过于频繁",
                // time: req.session.registerVCodeTime

            })
            return;

        }


    }
    let captcha = svgCaptcha.create()

    req.session.registerVCode = captcha
    req.session.registerVCodeTime = new Date()

    res.send({
        code: 0,
        data: captcha.data,
        time:60000
    })
})
router.post("/checkVcode",(req,res)=>{
    let {svgCode}=req.body
    console.log(req.body,555)
    console.log(svgCode,666)
    if(!svgCode || svgCode.toLocaleLowerCase()!==req.session.registerVCode.text.toLocaleLowerCase()){
        res.send({
            code:1,
            msg:"验证失败"
        })
    }else{
        res.send({
            code:0,
            msg:"验证成功"
        })
    }
})
router.post('/',(req,res)=>{
    let {user,pwd,svgcode}=req.body
    console.log(user)
    console.log(pwd)
    console.log(svgcode)

    if(!user || !pwd || !svgcode){
        res.send({
            code:1,
            msg:"数据无效"
        })
        return
    }
    if(svgcode.toLocaleLowerCase()!==req.session.registerVCode.text.toLocaleLowerCase()){
        res.send({

            code:2,
            msg:"验证码错误!!!"
        })
        return
    }
    if(!/^[\w<>,.?|;':"{}!@#$%^&*()\-\\]{6,12}$/.test(pwd)){
        res.send({
            code:2,
            msg:"密码不符合规则"
        })
        return
    }
    userDB.findOne({user})
    .then(data=>{   
        if(data){
            res.send({
                code:3,
                msg:"用户名已存在"
            })
        }else{
            userDB.create({user,pwd})
            .then(d=>{
                res.send({
                    code:0,
                    msg:"注册成功"
                })
            })
            .catch(e=>{
                res.send({
                    code:4,
                    msg:"注册失败"
                })
            })
        }
    })
    .catch(e=>{
        res.send({
            code:4,
            msg:'服务器错误'
        })
    })
})

module.exports = router
