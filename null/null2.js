class User {
    constructor(id, name){
        this.id = id
        this.name =  name
    }
    hasAccess(){
        return this.name === "Rashid"
    }
}

class NullUser {
    constructor(){
        this.id = -1
        this.name = 'guest'
    }
    hasAccess(){
        return false
    }
}

const users = [
    new User(1, 'Rashid'),
    new User(2, 'Sara')
]

function getUser(id){
    const user = users.find(user => user.id === id);
    if (user == null) {
        return new NullUser()
    } else {
        return user
    }
}

function printUser(id){
    const user = getUser(id)
    console.log(`hello ${user.name}`);
    if(user.hasAccess()){
        console.log('you have access');
    } else {
        console.log('you dont have access');
    }
}

printUser(3)