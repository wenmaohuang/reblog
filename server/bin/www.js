var app = require('../app')
var debug = require('debug')('server:server')
var fs = require('fs')
var path = require('path')
var http = require('http')
// var https = require('https')
// var options = {
//     // key:fs.readFileSync(path.join(__dirname,'../https/privatekey.pem')),
//     // cert:fs.readFileSync(path.join(__dirname,'../https/certificate.pem')),
//     key:fs.readFileSync(path.join(__dirname,'../https/4197482_www.fyyd.vip.key')),
//     cert:fs.readFileSync(path.join(__dirname,'../https/4197482_www.fyyd.vip.pem'))
// }
var port = normalizePort(process.env.PORT || '3001')
app.set('port', port)
// http.createServer(app).listen(80)
var server = http.createServer(app)
// https.createServer(options,app)
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)
// var host = server.address().address;
// console.log('Example app listening at http://%s:%s', host, port);

function normalizePort(val) {
    var port = parseInt(val, 10)
    if (isNaN(port)) {
        return val
    }
    if (port >= 0) {
        return port
    }
    return false
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error
    }
    var bind = typeof port === 'string'
        ? 'Pipe' + port
        : 'Port' + port
    switch (error.code) {
        case 'EACCES':
            console.error(bind + 'requires elevated privileges')
            process.exit(1)
            break
        case 'EADDRINUSE':
            console.error(bind + ' is already in use')
            process.exit(1)
            break
        default:
            throw error
    }
}

function onListening() {
    var addr = server.address()
    var bind = typeof addr === 'string'
        ? 'pipe' + addr
        : 'port' + addr.port
    debug('Listening on' + bind)
}