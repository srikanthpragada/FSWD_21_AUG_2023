class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    // Methods 
    getCategory() {
        if (this.age < 30)
            return "Young";
        else
            if (this.age < 60)
                return "Middle-Aged"
            else
                return "Old"
    }
    
    setAge(newage) {
        this.age = newage
    }
}

class Student extends Person {
    constructor(name, age, course) {
        super(name, age)
        this.course = course 
    }

    setCourse(newCourse) {
        this.course = newCourse 
    }
}

var p1 = new Person("Bill Gates", 68)

p1.setAge(59)
console.log(p1.name, p1['name'], p1.getCategory())


var p2 = new Person("Larry Page", 40)
console.log(p2.getCategory())

var s1 = new Student("Scott", 20, "Python")
console.log(s1.getCategory())
s1.setCourse("Data Science")
console.log(s1.course)

