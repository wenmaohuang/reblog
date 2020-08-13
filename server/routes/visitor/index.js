var express = require('express')
var router = express.Router()
var userDB = require('../../db/user')
router.post("/getUser", (req, res) => {
    userDB.find()
        .then(data => {
            // console.log(data,'aaaa');
            res.send({
                data
            })
        })
        .catch(e => {
            res.send({
                code: 4,
                msg: '服务器错误'
            })
        })
})

module.exports = router

