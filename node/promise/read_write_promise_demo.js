

const fs = require('fs/promises')

const source = __dirname + "\\names.txt"
//const target = __dirname + "\\names_copy.txt"
const target = "x:\\names.txt"

fs.readFile(source, 'utf-8')
  .then( data => {
      fs.writeFile(target, data)
      .then( () => console.log("Copied Successfully!"))
      .catch((err) => console.log("Write Error -->" + err))
  })
  .catch( err => console.log("Error while reading : " + err))



   

