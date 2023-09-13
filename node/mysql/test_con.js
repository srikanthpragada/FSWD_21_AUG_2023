var mysql = require('mysql');

var con = require("./connection_util")

// Connect using connection object
con.connect( err => {
    if (err)
      throw err;
    console.log("Connected!");
    con.end() 
  }
);
