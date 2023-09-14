var mysql = require('mysql');

var con = require("./connection_util")

con.connect(function (err) {
  if (err) throw err;
 
  con.query("update employees set salary = ? where emp_id = ?",
    [600000, 8],
    function (err, result) {
      if (err) throw err;
 
      console.log(result)  // OKPacket

      if (result.affectedRows === 1)
        console.log("Update Employee Successfully")
      else
        console.log("Sorry! Employee not found!")
      
      con.end()
    }
  );
}
);
 