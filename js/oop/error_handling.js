function parse(str) {
    let num = parseInt(str)
    if (isNaN(num))
        throw new Error("Invalid number!")  // Throw exception
    else
        return num
}

try {
    let a = parse("10")
    console.log(a)

    a = parse("abc")
    console.log(a)
}
catch (e) {
    console.log(e.message)
}

console.log("The End")