
var express = require('express');
const port = 8888
var app = express();

var cookieSession = require('cookie-session')

app.use(cookieSession({
  name: 'session-id',         // cookie name 
  keys: ['k1'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.get('/countViews', (req, res) => {
  req.session.count = (req.session.count || 0) + 1
  res.send(`<h1>You viewed this page for ${req.session.count} times</h1>`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

