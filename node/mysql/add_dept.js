var mysql = require('mysql');

var con = require("./connection_util")

con.connect(function (err) {
  if (err) throw err;
 
  var query = con.query(
    "insert into departments set ?",
        {dept_id: 'te', dept_name: 'Testing'},
      function (err, result) {
        if (err) throw err;
        // console.log(query.sql)
        // console.log(`Inserted ${result.affectedRows} rows`)
        console.log(result)
        con.end()
      }
  );
}
);
 