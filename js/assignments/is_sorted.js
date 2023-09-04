
function isSorted(a) {
    pv = a[0]
    for (let n of a) {
        if (n < pv)
            return false

        pv = n
    }
    return true
}

console.log(isSorted([1, 4, 5]))
console.log(isSorted([1, 4, 3]))

