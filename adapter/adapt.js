class Shipping {
    request(){
        return '400$'
    }
}
// new ui
class AdvancedShipping {
    login(credential){

    }
    setStart(start){

    }
    setDestination(destination){

    }
    calculate(weight){
        return '80$'
    }
}
//adapter
class Adapter {
    constructor(credential) {
        this.credential = credential
        this.shipping = new AdvancedShipping()
        this.shipping.login(this.credential)
    }
    request(zipStart, zipEnd, weight){
        this.shipping.setStart(zipStart)
        this.shipping.setDestination(zipEnd)
        return this.shipping.calculate(weight)
    }
    
}
const shipping = new Shipping()

const credential = {token: 'djfei3394'};

const adapter = new Adapter(credential)

let cost = shipping.request('zip Start','zip end','2kg')
let cost2 = adapter.request('zipStart', 'zip End', '20kg')
console.log(cost);
console.log(cost2);