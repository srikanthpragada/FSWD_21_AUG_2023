var mysql = require('mysql');

var con = require("./connection_util")

con.connect(function (err) {
  if (err) throw err;

  con.query("delete from departments where dept_id = ?",
    ['d3'],
    function (err, result) {
      if (err) {
        console.log(err)
        console.log("Sorry! Could not delete department. Error -->" + err.sqlMessage)
      }
      else {
        if (result.affectedRows === 1)
          console.log("Deleted Department Successfully")
        else
          console.log("Sorry! Department not found!")
      }
      con.end()
    }
  );
}
);
