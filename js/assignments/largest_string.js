
function largest_string(...names) {
    var largest = ""
    for (let n of names) {
        if (n.length > largest.length) {
            largest = n
        }
    }
    return largest
}

console.log(largest_string('abc', 'de', 'pqr', 'def'))
