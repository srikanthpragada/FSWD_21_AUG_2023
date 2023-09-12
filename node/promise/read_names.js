
const fs = require('fs/promises')

const source = __dirname + "\\name.txt"

const ps = fs.readFile(source, 'utf-8')
ps.then(data => {
    console.log(data)
})
ps.catch( (error) => console.log(error))
  


   

