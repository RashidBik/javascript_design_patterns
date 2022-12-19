function Developer(name, skill){
    this.name = name 
    this.skill = skill
}
function Tester (name, skill){
    this.name = name
    this.skill = skill
}

function employee(name, skill) {
    if (skill === 'developer') {
        return new Developer(name, skill)
    } else if (skill === 'tester'){
        return new Tester(name, skill)
    }
}

const employees = [];
employees.push(employee('Rashid','developer'))
employees.push(employee('Adrina', 'tester'))


// const employee1 = employee('Rashid','developer')
// const employee2 = employee('Adrina', 'tester')
for(const emp of employees) console.log(emp);
// for(const emp of [employee1,employee2]) console.log(emp);