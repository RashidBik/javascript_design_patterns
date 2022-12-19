function Observer() {
   this.observer = []
}
Observer.prototype = {
    subscribe: function(fn){
        this.observer.push(fn)
    },
    unsubscribe: function(fn){
        this.observer = this.observer.filter(obs => obs !== fn)
    },
    fire(){
        this.observer.forEach(observ => observ())
    }
}
const obs = new Observer()
function observer1(){
    console.log('observer 1 fired');
}
function observer2(){
    console.log('observer 2 fired');
}
obs.subscribe(observer1)
obs.subscribe(observer2)

// obs.unsubscribe(observer1)
// obs.unsubscribe(observer2)

obs.fire()
obs.fire()