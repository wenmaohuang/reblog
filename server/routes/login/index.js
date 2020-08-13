var express = require('express')
var router = express.Router()
var userDB = require('../../db/user')
router.post("/", (req, res) => {
    if (req.session.login) {
        res.send({
            code: 2,
            msg: '已登录'
        })
        return
    }

    let { user, pwd } = req.body
    if (!user || !pwd) {
        res.send({
            code: 1,
            msg: '数据无效'
        })
        return
    }
    if (!/^[\w\u4e00-\u9fa5\uac00-\ud7ff\u0800-\u4e00\-]{2,7}$/.test(user) ||
        !/^[\w<>,.?|;':"{}!@#$%^&*()\/\-\[\]\\]{6,18}$/.test(pwd)) {

    }
    userDB.findOne({ user })
        .then(data => {
            if (data) {
                if (data.pwd === pwd) {
                    req.session.login = data

                    res.send({
                        code: 0,
                        msg: '登录成功'
                    })
                } else {
                    res.send({
                        code: 2,
                        msg: '登录失败'
                    })
                }
            } else {
                res.send({
                    code: 1,
                    msg: '用户不存在'
                })
            }
        })
        .catch(e => {
            res.send({
                code: 4,
                msg: '服务器错误'
            })
        })
})
router.post('/ifLogin', (req, res) => {
    // console.log(req.session,999)
    res.send({
        userInfo: req.session.login
    })
})

router.post("/logout",(req,res)=>{
    req.session.destroy()
    res.send(
        {
            code:0,
            msg:'退出成功'
        }
    )
})
module.exports = router

