var mysql = require('mysql');

var con = require("./connection_util")

con.connect( err => {
  if (err) throw err;
 
  var query = con.query(
      "insert into departments set ?",  // SQL Command
      {dept_id: 't', dept_name: 'Testing'}, // Data 
      (err, result) => {  // callback 
        if (err) throw err;
        console.log(query.sql)
        // console.log(`Inserted ${result.affectedRows} rows`)
        console.log(result)
        con.end()
      }
  );
}
);
 