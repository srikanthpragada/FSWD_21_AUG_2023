var mysql2 = require('mysql2/promise');


async function getConnection() {
    try {
        const con = await mysql2.createConnection({
            host: "localhost",
            user: "root",
            password: "mysql",
            database: "aug21"
        });
        return con
    }
    catch (ex) {
        console.log(ex)
        throw ex
    }
} // getConnection() 
 

async function insertDept(dept) {
    try {
        const con = await getConnection()
        const result = await con.execute("insert into departments values(?,?)",
                                           [dept.deptid, dept.deptname])
        
        con.end() 
        return true
    }
    catch (ex) {
        console.log(ex)
        throw ex
    }
    
}

async function deleteDept(deptid) {
    try {
        const con = await getConnection()
        const [result] = await con.execute("delete from departments where dept_id = ?", [deptid])
        con.end() 
        if (result.affectedRows === 1)
            return 1 // deleted
        else
            return 0 // deptid not found 
    }
    catch (ex) {
        console.log(ex)
        return -1  // error
    }
}

async function updateDept(deptid, deptname) {
    try {
        const con = await getConnection()
        const [result] = await con.execute("update departments set dept_name = ? where dept_id = ?", [deptname, deptid])
        con.end() 
        if (result.affectedRows === 1)
            return 1 // updated
        else
            return 0 // deptid not found 
    }
    catch (ex) {
        console.log(ex)
        return -1  // error
    }
}


async function getDepartments() {
    try {
        const con = await getConnection()
        const [rows] = await con.execute("select * from departments")
        con.end() 
        return rows 
    }
    catch (ex) {
        throw ex 
    }
}

async function getDepartment(deptid) {
    try {
        const con = await getConnection()
        const [rows] = await con.execute("select * from departments where dept_id = ?", [deptid])
        con.end()
        return rows
    }
    catch (ex) {
        console.log(ex)
        throw ex
    }
}
  
module.exports ={insertDept, 
    deleteDept, getDepartments, 
    getDepartment, updateDept} 
 