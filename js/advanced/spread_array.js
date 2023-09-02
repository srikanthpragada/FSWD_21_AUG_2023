
let a1 = [1, 2, 3]

let a2 = a1 

a1.push(4)

console.log(a1)
console.log(a2)

let a3 = [100, ...a1, 10, 20]  // spread operator 
a1.push(5)
console.log(a1)
console.log(a3)

