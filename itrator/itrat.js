
class Itrator {
    constructor(itr) {
        this.index = 0
        this.items = itr
    }
    next(){
        const item = this.items[this.index]
        this.index++
        return item
    }    
    hasNext(){
        return this.index < this.items.length
    }
}

const itr = [10, 20, 30, 40];
const itrate = new Itrator(itr)

while(itrate.hasNext()){
    console.log(itrate.next());
}