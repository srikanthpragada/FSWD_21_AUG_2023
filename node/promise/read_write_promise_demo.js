

const fs = require('fs/promises')

const source = __dirname + "\\names.txt"
const target = __dirname + "\\names_copy.txt"

fs.readFile(source, 'utf-8')
  .then( data => {
      return fs.writeFile(target, data)
  })
  .then( () => console.log("Copied Successfully!"))
  .catch( err => console.log(err))



   

