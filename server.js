// const http = require('http')
// const fs = require('fs')
// const { NOTFOUND } = require('dns')

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'content-type': 'text/html' })
//   fs.createReadStream('index.html').pipe(res)
// })

// server.listen(process.env.PORT || 3000)

var express = require('express')
var app = express()
app.use(express.static('public'));

var server = app.listen(8000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Express app listening at http://%s:%s', host, port)

})