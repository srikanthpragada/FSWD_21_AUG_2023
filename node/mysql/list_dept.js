var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "jun28"
});


con.connect(function (err) {
  if (err) throw err;

  con.query("select * from departments",
    function (err, departments, fields) {
      if (err) throw err;

      //console.log(fields)
      //console.log(departments)
      for (let dept of departments) {
         console.log(`${dept.dept_id} -  ${dept.dept_name}`)
      }
      con.end()
    }
  );
}
);
 