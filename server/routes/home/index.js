var express = require('express')
var router = express.Router()
var userDB = require('../../db/user')

router.post('/ifLogin', (req, res) => {
    // console.log(req.session,999)
    res.send({
        userInfo: req.session.login
    })
})


module.exports = router

