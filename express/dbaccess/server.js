var express = require('express');
var mysql = require('mysql2/promise');

const port = 8888
var app = express();

const conDetails = require("./database")

// Form body is to be parsed
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', './ejs')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.end("<h1>DB Access Demo </h1>")
})

app.get('/dept/add', (req, res) => {
    res.render("deptadd")
})

app.get('/dept/delete', (req, res) => {
    const deptid = req.query.deptid 
    const result = deleteDept(deptid)
    res.end("<h1>Deleted!!</h1>")
})

async function deleteDept(id) {
    try {
        const con = await mysql.createConnection(conDetails)
        const [result] = await con.execute("delete from departments where dept_id = ?",
                          [id])
        con.end()
        if(result.affectedRows === 1)                          
            return true 
        else
            return false
    }
    catch (ex) {
        console.log(ex)
        return false
    }
}

async function addDept(id, name) {
    try {
        const con = await mysql.createConnection(conDetails)
        //console.log("Connected!")
        await con.execute("insert into departments value(?,?)",
                          [id, name])
        //console.log("Inserted!")
        con.end()
        //console.log("Closed connection!")
        return true
    }
    catch (ex) {
        console.log(ex)
        return false
    }
}

app.post('/dept/add', (req, res) => {
    // process form data
    const { deptid, deptname } = req.body
    let result = addDept(deptid, deptname)
    console.log(result)
    if (result)
        res.end("<h1>Department has been added successfully!!")
    else
        res.end("<h1>Department could not be added!!")
})


app.listen(port, () => {
    console.log(`Db Access Application listening on port ${port}`)
})