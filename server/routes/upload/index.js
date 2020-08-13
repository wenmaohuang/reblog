const express = require('express')
let router = express.Router()
router.use('/avatar',require('./avatar'))
console.log(1)
module.exports= router
