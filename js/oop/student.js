class Student {
    constructor(name, course, feePaid = 0) {
        this.name = name
        this.course = course
        this.feePaid = feePaid
    }

    payment(amount) {
        this.feePaid += amount
    }

    getTotalFee() {
        return this.course === "java" ? 10000 : 20000;
    }

    getDue() {
        return this.getTotalFee() - this.feePaid
    }
}

let s1 = new Student("Steve", "java", 2000)
s1.payment(5000)
console.log(s1.getDue())
