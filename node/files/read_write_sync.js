// Read from names.txt and write upper_names.txt 

const fs = require("fs")

let source =  __dirname + "\\names.txt"
let target =  __dirname + "\\upper_names.txt"

let names = fs.readFileSync(source, "utf-8")
console.log("Read source")
fs.writeFileSync(target, names.toUpperCase())
console.log("Wrote to target")
console.log("Done")





