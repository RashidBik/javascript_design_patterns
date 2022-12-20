class Address {
    constructor(zip, address){
        this.zip = zip
        this.address = address
    }
}
class User {
    constructor(name){
        this.name = name
    }
}
class BuildUser {
    constructor(name){
        this.user = new User(name)
    }
    setAge(age){
        this.user.age = age
        return this;
    }
    setPhone(phone){
        this.user.phone = phone
        return this;
    }
    setAddress(address){
        this.user.address = address
        return this;
    }
    builder(){
        return this.user
    }
}
const user = new BuildUser('Rashid').setAge(23).setPhone('+98322889998').setAddress(3322,'Kabul, Afg').builder()
console.log(user);