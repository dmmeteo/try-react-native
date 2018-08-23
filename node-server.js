const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// to emit DB
let db = require('./data/flatListData')
// to run server on custom IP
const http = require('http')
const server = http.createServer(app)

const host = require('os').networkInterfaces().en0.find(elm => elm.family == 'IPv4').address;
const port = 8001

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.json({ list_all_foods: db})
})
app.post('/', function (req, res) {
    console.log(req.body); 
    db = [...db, req.body]
    res.json({ result: 'ok'})
})
app.put('/', function (req, res) {
    let query = req.body
    let _db = []
    console.log(query);
    db.forEach(item => {
        if (item.key === query.key) {
            _db.push(query);
        } else {
            _db.push(item);
        }
    })
    db = _db;
    res.json({ result: 'ok'})
})

server.listen(3000, '127.0.0.1', (err) => {
    server.close((err) => {
        server.listen(port, host, (err) => {
            if (err) {
                return console.error('something bad happened', err)
            }
            console.log(`Server is listening on ${host}:${port}`)
        });
    })
})