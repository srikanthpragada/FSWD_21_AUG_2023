// Read file sync

const fs = require("fs")

function showResult(err, data)
{
  if(err)
    console.log(err)
  else
    console.log(data)
}

let filename =  __dirname + "\\names.txt"
fs.readFile(filename, "utf-8", showResult)

console.log("The End")


