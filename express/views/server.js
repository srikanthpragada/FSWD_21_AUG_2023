var express = require('express');

const port = 8888
var app = express();

app.set('views','./ejs')
app.set('view engine', 'ejs')

let course = { title : 'Full stack web development', fee : 10000}

let courses =[
     { title : 'Full stack web development', fee : 10000},
     { title : 'Python Programming', fee : 8000},
     { title : 'Java EE + Spring', fee : 20000}
]


app.get('/course', (req, res) => {
    let response = `<h2>Title : ${course.title}<br/>Fee : ${course.fee} </h2>`
    res.send(response)
})

app.get('/test', (req, res) => {
    res.render('test')  // render view
})


app.get('/showcourse', (req, res) => {
    res.render('course', course)
})

app.get('/listcourses', (req, res) => {
    res.render('list_courses',
         {courses:  courses, trainer : 'Srikanth'})
})

app.listen(port, () => {
    console.log(`Application listening on port ${port}`)
})