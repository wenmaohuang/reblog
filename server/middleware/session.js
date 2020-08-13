let session = require('express-session')
let connectMongo = require('connect-mongo')(session)
let mongoose = require('mongoose')

module.exports = session({
    secret:'afei',
    cookie:{maxAge:3*60*60*1000},
    rolling:false,
    resave:false,
    saveUninitialized:false,
    store:new connectMongo({url:'mongodb://localhost:27017/blog'})
})