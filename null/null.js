class User {
    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
    }
    hasAccess(){
        return this.name === 'Rashid'
    }
}
 const users = [
    new User('Rashid', 1 , 'email'),
    new User('Sara', 2, 'gamil')
 ]
 function getUser(id){
    return users.find(user => user.id === id)
 }
 function printUser(id){
    const user = getUser(id)
    let name = 'guest';
    if(user !== null && user.name !== null){
        name = user.name
    }
    console.log(`hello ${name}`);
    if(user !== null && user.hasAccess !== null && user.hasAccess()){
        console.log('you have access');
    } else {
        console.log('you are not allowed');
    }
 }

 printUser(2)