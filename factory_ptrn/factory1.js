class Developer {
    constructor(name, skill) {
        this.name = name
        this.sill = skill
    }
}

class Tester {
    constructor(name, skill){
        this.name = name
        this.skill = skill
    }
}

// xxxxxxxxxxswitch(name,skill){
// xxxxxxxxxx    case 'developer':
// xxxxxxxxxx    return new Developer(name,skill)
// xxxxxxxxxx}

class EmployeeFactor {
   static create(name, skill){
       switch (skill) {
        case 'developer':
            return new Developer(name, skill);
        case 'tester':
            return new Tester(name, skill)
       }
    }
}
// class EmployeeFactor {
//    static create(name, skill){
//         if(skill === 'developer'){
//             return new Developer(name, skill)
//         } else if (skill === 'tester'){
//             return new Tester(name, skill)
//         }
//     }
// }

const employees = []

employees.push(EmployeeFactor.create('Rashid', 'developer'))
employees.push(EmployeeFactor.create('Ramaza', 'tester'))
employees.push(EmployeeFactor.create('Alireza', 'developer'))
employees.push(EmployeeFactor.create('kamal', 'tester'))

for(const employee of employees){
    console.log(employee);
}
// const employee1 = EmployeeFactor.create('Rashid', 'developer')
// const employee2 = EmployeeFactor.create('Ramaza', 'tester')
// const employee3 = EmployeeFactor.create('Alireza', 'developer')
// const employee4 = EmployeeFactor.create('kamal', 'tester')

// for(const employee of [employee1,employee2,employee3,employee4]){
//     console.log(employee);
// }