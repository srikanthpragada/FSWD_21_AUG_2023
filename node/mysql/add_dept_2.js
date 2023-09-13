var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "jun28"
});
con.connect(function (err) {
  if (err) throw err;
 
  con.query("insert into departments values(?,?)",
    ['d3', 'Department 3'],
    function (err, result) {
      if (err) throw err;
      console.log("Inserted %d rows", result.affectedRows)
      con.end()
    }
  );
}
);
 