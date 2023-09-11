// Read file sync

const fs = require("fs")

let filename =  __dirname + "\\names.txt"
//console.log(filename)
let names = fs.readFileSync(filename, "utf-8")
console.log(names)
console.log("The End")


