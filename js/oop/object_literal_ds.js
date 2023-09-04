// Object Literal 
let p1 = { name : "Bill", age : 68, email : 'bill@microsoft.com'}

// Destructuring 
let {name, age, gender = 'male'} = p1 

console.log(name, age, gender)

// Iterate object to get propery names 
for(let p in p1)
  console.log(p, p1[p])


console.log(p1['age'], p1.age)


