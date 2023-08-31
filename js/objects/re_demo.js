var pattern = /\d+/
console.log(pattern.test("abc") )
console.log(pattern.test("abc123") )

// exec() 
let s = "Abc 123 234"
pattern =  /\d+/
let matches = pattern.exec(s)

console.log(matches)
console.log("Found " + matches[0] + " at " + matches.index)

// let st = "Abc 123 234"
// console.log(/\w+/.exec(st))



