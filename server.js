const express = require('express')
const productsList = require('./database')
const app = express()
const path = require('path')
var port = 4000

app.listen(port, function () {
console.log('We are listening on port ' + port)
})

app.use(express.json())

app.get('/', function (req, res) {
res.sendFile(path.join(__dirname, '/index.html'))
})

app.post('/num', function (req, res) {
var num = req.body.value
productsList.push(req.body);
res.end(JSON.stringify(productsList))
})