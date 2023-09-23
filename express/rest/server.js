
var express = require('express');
const {insertDept, 
       deleteDept, 
       getDepartments,
       getDepartment,
       updateDept } = require("./database")


const port = 8888
var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());


app.get('/', (req, res) => {
  res.send('<h1>HR REST API</h1>')
})

app.get("/api/dept", async (req, res) => {
  const departments = await getDepartments()
  res.json(departments)
}
);

app.get("/api/dept/:id", async (req, res) => {
  const deptid = req.params.id
  try {
    const result = await getDepartment(deptid)
    if (result.length > 0)
      res.json(result[0])
    else
      res.status(404).send("Dept Id Not Found")
  }
  catch (ex) {
    console.log(ex)
    res.status(500).send("Sorry!! Could not get department due server error!")
  }
}
);


app.put("/api/dept/:id", async (req, res) => {
  const deptid = req.params.id
  const deptname = req.body.deptname
  const result = await updateDept(deptid, deptname)
  if (result === 1)
    res.status(200).send("Updated")
  else
    if (result === 0)
      res.status(404).send("Dept Id Not Found")
    else
      res.status(500).send("Sorry!! Could not update department due server error!")
}
);


app.post("/api/dept", async (req, res) => {
  try {
    // validate data 
    const dept = req.body
    if(! (dept.deptid && dept.deptname)) {
        res.status(400).send("Sorry!! Could not insert department due to data error!")
        return; 
    }
    // insert a new row into DEPTS
    const result = await insertDept(dept)
    res.status(201).send("Department inserted successfully!")
  }
  catch (ex) {
    res.status(500).send("Sorry!! Could not insert department due server error!")
  }
} //callback
)// POST


app.delete("/api/dept/:id", async (req, res) => {
  const deptid = req.params.id
  const result = await deleteDept(deptid)
  if (result === 1)
    res.status(204).send("Deleted")
  else
    if (result === 0)
      res.status(404).send("Dept Id Not Found")
    else
      res.status(500).send("Sorry!! Could not delete department due server error!")
}); // delete


app.listen(port, () => {
  console.log(`HR REST App listening on port ${port}`)
})
