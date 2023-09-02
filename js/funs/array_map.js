let a = [1, 3, 4, 8, 10, 30]

function square(v) {
    return v * v 
}

let na = a.map(square)
let na2 = a.map(v => v * v)

console.log(na)
console.log(na2)