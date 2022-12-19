class Process {
    constructor(state) {
        this.state = state
    }
}

const singleton = (function() {
   class  ProcessManager {
    constructor(x) {
        this.process = new Process(x)
    }
   }

   let instance;

   function createInstance(x) {
        const object = new ProcessManager(x);
        return object
   }

   return {
    getInstance: function(x){
        if(!instance){
            instance = createInstance(x);
        }
        return instance;
    }
   }

})()

const processManager1 = singleton.getInstance('X1');
const processManager2 = singleton.getInstance('X2');

console.log(processManager1,processManager2);