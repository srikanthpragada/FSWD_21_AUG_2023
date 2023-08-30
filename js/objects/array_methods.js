let names = ["JavaScript", "Java", "Python", "Ruby"]

names.push("TypeScript")
console.log(names)

names.splice(0, 1)   // Delete 0th element 
console.log(names)

console.log(names.indexOf("Python"))

names.sort()
console.log(names)