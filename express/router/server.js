var express = require('express');
var path = require('path');

const port = 8888
var app = express();

var adminRouter = require('./admin');
app.use('/admin', adminRouter);

var reportsRouter = require('./reports');
app.use('/reports', reportsRouter);

app.get("/", (req, res) => {
  res.send("<h1>Main Router</h1>")
}
)

app.get("/*", (req, res) => {
  res.send("<h1>Unknown URL</h1>")
}
)
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
