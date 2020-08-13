const express = require('express')
const path = require('path')
const app = express()
const cookieParser = require('cookie-parser')
var logger = require('morgan');
var history = require('connect-history-api-fallback');

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.use(history());
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../client/build')))
app.use(express.static(path.join(__dirname, './public')))




app.use((req, res, next) => {
    res.header({
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': req.headers.origin || '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        // 'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
        'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
        'Content-Type': 'application/json;charset=utf-8',

        // "Content-Security-Policy": "upgrade-insecure-requests"
    })
    if (req.method === 'OPTIONS') {
        res.sendStatus(200)
    } else {
        next()
    }
})

// console.log(request,'eee');



app.use(require('./middleware/session'))
app.use('/', require('./routes/index'))

// app.get('aa',)

module.exports = app