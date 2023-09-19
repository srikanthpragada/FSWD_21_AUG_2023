var express = require('express');
var path = require('path');
const port = 8888
var app = express();

// Static files config 
app.use(express.static('static'))

// Form body is to be parsed
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// view engine setup
app.set('views', './views');
app.set('view engine', 'ejs');

// Handle GET request 
app.get("/interest", (req, res) => {
  res.render('interest')
}
)

// Handle POST request 
app.post('/interest', (req, res) => {
  // calculate interest 
  let { amount, rate } = req.body
  let interest = amount * rate / 100
  res.render('result', { interest: interest })
})

app.get('/interest2', (req, res) => {
  res.render('interest2', 
     {amount : 100000, rate : 10, interest : undefined})
})

app.post('/interest2', (req, res) => {
  // calculate interest 
  let { amount, rate } = req.body
  let interest = amount * rate / 100
  res.render('interest2', { interest: interest, ...req.body })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
