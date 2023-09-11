// Read from names.txt and write upper_names.txt 

const fs = require("fs")

let source =  __dirname + "\\names.txt"
let target =  __dirname + "\\upper_names.txt"

fs.readFile(source, "utf-8",
    (err,data) => {
       if(err) 
          throw err;

       console.log("Read source")
       fs.writeFile(target, data.toUpperCase(),
          (err) => {
            if (err)
             throw err
            console.log("Wrote to target")
          }
       )   
    }
)
   
for(let i = 1; i < 100; i ++)
   console.log(i)






