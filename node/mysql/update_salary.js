var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "jun28"
});

con.connect(function (err) {
  if (err) throw err;
 
  con.query("update employees set salary = ? where emp_id = ?",
    [600000, 9],
    function (err, result) {
      if (err) throw err;
 
      console.log(result)

      if (result.affectedRows === 1)
        console.log("Update Employee Successfully")
      else
        console.log("Sorry! Employee not found!")
      
      con.end()
    }
  );
}
);
 