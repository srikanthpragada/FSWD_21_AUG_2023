let names = ["JavaScript", "Java", "Python"]

names[5] = "TypeScript"
names[1] = "Java 20"

//console.log(names)


for (let idx in names)
{
    console.log(`Value at ${idx} is ${names[idx]}`)
}

for (let name of names) {
    console.log(name)
}