class UPS {
    constructor(){
        this.name = 'ups'
    }
    calculate(){
        return '40$'
    }
}
//////////////////////////////////
class FEDEX{
    constructor() {
        this.name = 'fedex'
    }
    calculate(){
        return '59$'
    }
}
/////////////////////////////////
class Shipping {
    getStratigy(company){
        this.company = company
    }
    calculate(){
        return [this.company.calculate(), this.company.name]
    }
}

const pkg = {from: 'malizi', to: 'Afg', gr:'500'}
// 
// 
const shipping = new Shipping()

shipping.getStratigy(new UPS());
console.log(shipping.calculate());

shipping.getStratigy(new FEDEX());
console.log(shipping.calculate());
