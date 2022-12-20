class Address {
    constructor(zip, address){
        this.zip = zip
        this.address = address
    }
}
class User {
    constructor(name, id, phone, address){
        this.name = name
        this.id = id
        this.phone = phone
        this.address = address
    }
}

const user = new User('rashid',undefined,undefined, new Address(3000, 'Kabul'))
console.log(user);