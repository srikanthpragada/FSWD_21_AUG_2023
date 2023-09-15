var express = require('express');

const port = 8888
var app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello Express</h1>')
})

app.get('/now', (req, res) => {
    res.send(`<h1>${new Date()}</h1>`)
})

// All URLs other that what was mentioned 
app.get('/*', (req, res) => {
    res.send(`<h1>Unknown URL</h1>`)
})

app.listen(port, () => {
    console.log(`Application listening on port ${port}`)
})