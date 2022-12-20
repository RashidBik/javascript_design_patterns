class Mortgadge {
    constructor(name) {
        this.name = name
    }
    apply(amount){
        let result = 'Approved'
        if (!new Bank().get(this.name,amount)) {
            result = 'Declined'
        } else if (!new Credit().get(this.name)) {
            result = 'Declined'
        } else if (!new Background().check(this.name)){
            result = 'Declined'
        }
        return `${this.name}s request for ${amount} was ${result}`
    }
}

class Bank {
   get(name, amount){
        return false
    }
}
class Credit {
    get(name){
        return true
    }
}
class Background {
    check(name){
        return true
    }
}
const morg = new Mortgadge('Rashid')
const result = morg.apply('2000$')
console.log(result);