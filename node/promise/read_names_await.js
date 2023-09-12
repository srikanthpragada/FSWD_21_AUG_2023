
const fs = require('fs/promises')

const source = __dirname + "\\names.txt"

async function readNames() {
    const ps = fs.readFile(source, 'utf-8')
    let names = await ps
    console.log(names)
}

readNames()








