class Employee {
    constructor(name, salary) {
        this.name = name 
        this.salary = salary
    }

    get mySalary(){
        return this.salary
    }
    set mySalary(slr){
        this.salary = slr
    }
    accept(visitor){
        visitor(this)
    }
}
const empl = new Employee('rashid', 3000);

function extraSalary(emp) {
    emp.mySalary = emp.mySalary*2
}

empl.accept(extraSalary)
console.log(empl.mySalary);