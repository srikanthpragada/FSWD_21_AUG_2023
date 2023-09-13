const path = require('path')


const test = '/files/test.txt';

console.log(path.dirname(test)); // folder -> /files
console.log(path.basename(test)); // filename -> test.txt
console.log(path.extname(test)); // extension -> .txt

console.log(path.join("/node", "files", "test.txt"))

console.log(path.normalize("/node/files/path/.."))