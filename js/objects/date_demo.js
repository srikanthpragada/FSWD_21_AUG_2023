
let d1 = new Date("2023-01-01")
console.log(d1.toString())

let d2 = new Date(2023, 0, 1) // year, month, day
console.log(d2.toString()) 

let cd = new Date(); // system date 
cd.setDate(cd.getDate() + 30)
console.log(cd.toString()) 

