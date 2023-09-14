var mysql = require('mysql');

var con = require("./connection_util")

con.connect(function (err) {
  if (err) throw err;

  con.query("select dept_id, sum(salary) as total_salary from employees group by dept_id",
    function (err, departments) {
      if (err) throw err;
     
      //console.log(departments)
      for (let dept of departments) {
          console.log(`${dept.dept_id} -  ${dept.total_salary}`)
      }
      con.end()
    }
  );
}
);
 