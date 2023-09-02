
function sumall(...nums) {
    let total = 0
    for(let n of nums)
       total += n

    return total 
}

console.log(sumall(10, 20, 30))
console.log(sumall(10, 20, 30, 1, 2, 3))

