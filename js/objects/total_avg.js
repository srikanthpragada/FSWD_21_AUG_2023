
let marks = [30, 50, 66, 77, 80, 88, 35]

let total = 0
for (let m of marks) {
    total += m
}

console.log(`Total = ${total}`)
console.log(`Avg   = ${total / marks.length}`)