class Coocking {
    constructor() {
        if(new.target === Coocking) throw new TypeError ('cannot construct Cooking instancess directly');
    }
    addGosht(){
        console.log('Gosht added')
        return this;
    }
    addSir(){
        console.log('Sir added')
        return this;
    }
    make(){
        return this
        .addGosht()
        .addAbstract()
        .addSir()
        .addChars()
    }
    addAbstract(){
        throw Error('is not abstracted')
    }
    addChars(){
        throw Error('no Chars')
    }
}
class Qurma extends Coocking {
    // make(){
    //     return this
    //     .addGosht()
    //     .addKachalo()
    //     .addSir()
    // }
    addAbstract(){
        console.log('Kachalo added')
        return this;
    }
    addChars(){
        console.log('Chars doded');
    }
}
class Briani extends Coocking {
    // make(){
    //     return this
    //     .addGosht()
    //     .addBringe()
    //     .addSir()
    // }
    addAbstract(){
        console.log('Bringe added')
        return this;
    }
    addChars(){
        console.log('Chars zir dariayee');
    }
}
const qurma = new Qurma()
const briani = new Briani()

qurma.make()
briani.make()