var mysql = require('mysql');

var con = require("./connection_util")

con.connect(function (err) {
  if (err) throw err;
 
  con.query("insert into departments values(?, ?)",
    ['d3', 'Department 3'],
    function (err, result) {
      if (err) throw err;
      console.log(`Inserted ${result.affectedRows} row(s)`)
      con.end()
    }
  );
}
);
 