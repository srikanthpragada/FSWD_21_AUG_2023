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

async function getDepts() {
    try {
        const con = await mysql.createConnection(conDetails)
        const [rows] = await con.execute("select * from departments")
        con.end()
        return rows
    }
    catch (ex) {
        throw ex;
    }
}

app.get('/dept/list', async (req, res) => {
    try {
       const rows = await getDepts()
       res.render('deptlist', {depts : rows})
    }
    catch(ex) {
        console.log(ex)
        res.send("<h2>Sorry! Could not get details!</h2>")
    }
})


async function deleteDept(id) {
    try {
        const con = await mysql.createConnection(conDetails)
        const [result] = await con.execute("delete from departments where dept_id = ?",
                          [id])
        con.end()
        if(result.affectedRows === 1)                          
            return 1
        else
            return 0
    }
    catch (ex) {
        console.log(ex)
        return -1
    }
}

app.get('/dept/delete/:deptid', async (req, res) => {
    const deptid = req.params.deptid 
    const result = await deleteDept(deptid)
    if(result === 1) // success 
      res.end("<h1>Deleted!!</h1>")
    else
     if(result === 0) // not found 
         res.send("<h1>Dept Id Not Found </h1>")
     else // error
         res.send("<h1>Could not delete due to error! </h1>")
})


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

app.get('/dept/add', (req, res) => {
    res.render("deptadd")
})

app.post('/dept/add', async (req, res) => {
    // process form data
    const { deptid, deptname } = req.body
    let result = await addDept(deptid, deptname)
    if (result)
        res.redirect("/dept/list")
    else
        res.send("<h1>Department could not be added!!")
})


async function getDept(id) {
    try {
        const con = await mysql.createConnection(conDetails)
        const [rows] = await con.execute("select * from departments where dept_id = ?", [id])
        //console.log(rows)
        con.end()
        return rows[0]
    }
    catch (ex) {
        throw ex;
    }
}


async function updateDept(deptid, deptname) {
    try {
        const con = await mysql.createConnection(conDetails)
        const [result] = await con.execute
                ("update departments set dept_name = ? where dept_id = ?",
                          [deptname, deptid])
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

app.get('/dept/edit/:id', async (req, res) => {
    const deptid = req.params.id
    const dept = await getDept(deptid)
    res.render("deptedit", {dept : dept})
})

app.post('/dept/edit/:id', async (req, res) => {
    const deptid = req.params.id
    const deptname = req.body.deptname 
    const result = await updateDept(deptid, deptname)
    if (result)
       res.redirect("/dept/list")
    else
       res.send("<h2>Sorry! Could not update department </h2>")
})


app.listen(port, () => {
    console.log(`Db Access Application listening on port ${port}`)
})