class User {
    constructor(name) {
        this.name = name
    }
    getUser(){
        return this.name
    }
    say(){
        console.log(`my name is ${this.name}`);
    }
    
}

class DecoratedUser {
    constructor(user, fname, salary){
        this.name = user.name
        this.fname = fname
        this.salary = salary
    }
    getName(){
        return user.getUser();
    }
    say(){
        console.log(`decorated user addres: ${this.getName()} ${this.fname}, ${this.salary}`);
    }
}
const user = new User('Rashid')
const decor = new DecoratedUser(user,'bik','10000$')
user.say()
decor.say()
// user.getUser()