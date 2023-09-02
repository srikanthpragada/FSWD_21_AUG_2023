
let a = [10, 20, 30]

let n1 = a[0]
let n2 = a[1]

console.log(n1, n2)

// Destructuring 
let [x, y] = a
console.log(x, y)

// Destructuring 
let [v1, ...v2] = a
console.log(v1, v2)

let [p1, p2 = 0, p3 = 0] = [100, 200]
console.log(p1, p2, p3)



