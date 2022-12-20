class Shop{
    build(builder){
        builder.step1()
        builder.step2()
        return builder.get()
    }
}
class Car {
    constructor() {
        this.tires = 0
    }
    addParts(){
        this.tires = 4
    }
    say(){
        console.log(`I Have ${this.tires} tires`);
    }
}
class Truck {
    constructor() {
        this.tires = 0
    }
    addParts(){
        this.tires = 10
    }
    say(){
        console.log(`I Have ${this.tires} tires`);
    }
}
class CarBuilder {
    constructor() {
        this.car = null
    }
    step1(){
        this.car = new Car()
    }
    step2(){
        this.car.addParts()
    }
    get(){
        return this.car
    }
}
class TruckBuilder {
    constructor() {
        this.truck = null
    }
    step1(){
        this.truck = new Truck()
    }
    step2(){
        this.truck.addParts()
    }
    get(){
        return this.truck
    }
}

const shop = new Shop()
const buildcar = new CarBuilder()
const buildtruck = new TruckBuilder()

const car = shop.build(buildcar)
const truck = shop.build(buildtruck)

car.say()
truck.say()