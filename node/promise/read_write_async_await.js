// Read from names.txt and write upper_names.txt 

const fs = require("fs/promises")

let source = __dirname + "\\names1.txt"
let target = __dirname + "\\upper_names.txt"

async function convertToUpper(source, target) {
   try {
      var names = await fs.readFile(source, "utf-8")
      await fs.writeFile(target, names)
      console.log("Converted!")
   }
   catch (ex) {
      console.log(ex)
   }
}


convertToUpper(source, target)



