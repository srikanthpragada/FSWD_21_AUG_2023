var mysql = require('mysql');

var con = require("./connection_util")

con.connect(function (err) {
  if (err) throw err;

  con.query("select * from departments",
    function (err, departments, fields) {
      if (err) throw err;

      // console.log(fields)
      // console.log(departments)
      for (let dept of departments) {
         console.log(`${dept.dept_id} -  ${dept.dept_name}`)
      }
      con.end()
    }
  );
}
);
 