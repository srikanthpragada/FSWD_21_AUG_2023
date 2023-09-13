var mysql = require('mysql');

// Create connection object 
var con = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "aug21"
  }
);

// Connect using connection object
con.connect( err => {
    if (err)
      throw err;
    console.log("Connected!");
    con.end() 
  }
);
