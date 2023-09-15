var express = require('express');

const port = 8888
var app = express();


app.get('/wish', (req, res) => {
    let user = req.query.user ?? 'Guest'  
    res.send(`<h1>Hello ${user}</h1>`)
})


app.listen(port, () => {
    console.log(`Application listening on port ${port}`)
})