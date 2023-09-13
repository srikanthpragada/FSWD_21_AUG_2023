var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "jun28"
});

con.connect(function (err) {
  if (err) throw err;

  con.query("delete from departments where deptid = ?",
    ['d3'],
    function (err, result) {
      if (err) {
        console.log("Sorry! Could not delete department. Error -->" + err.sqlMessage)
      }
      else {
        if (result.affectedRows == 1)
          console.log("Deleted Department Successfully")
        else
          console.log("Sorry! Department  not found!")
      }
      con.end()
    }
  );
}
);
