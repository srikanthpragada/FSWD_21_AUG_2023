var express = require('express');

const port = 8888
var app = express();


app.get('/wish', (req, res) => {
    let user = req.query.user ?? 'Guest'  
    res.send(`<h1>Hello ${user}</h1>`)
})

app.get('/greet/:user/:country', (req, res) => {
    console.log(req.params)
    let {user, country} = req.params   // { user : 'Larry', country : 'US'}
    res.send(`<h1>Hello ${user} from ${country}</h1>`)
})


app.listen(port, () => {
    console.log(`Application listening on port ${port}`)
})