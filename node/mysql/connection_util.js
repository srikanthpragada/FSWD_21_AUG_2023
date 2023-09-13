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

module.exports = con 
