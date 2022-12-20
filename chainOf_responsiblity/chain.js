class Checker {
    setSuccessor(successor){
        this.successor = successor
    }
    check(){
        console.log('successfull');
    }
    next(status){
        if (this.successor) {
            this.successor.check(status)
        }
    }
}
class Lock extends Checker{
    check(status){
        if(!status.locked) console.log(`door is Open`);
        super.next(status)
    }
}
class Alarm extends Checker{
    check(status){
        if(!status.alarm) console.log(`alarm is off`);
        super.next(status)
    }
}
class Lights extends Checker{
    check(status){
        if(!status.light) console.log(`lights are on`);
        super.next(status)
    }
}
class Status {
    constructor(){
        this.locked = false
        this.alarm = false
        this.light = false
    }
}
const alarm = new Alarm()
const lock = new Lock()
const light = new Lights()

const status = new Status()

lock.setSuccessor(alarm)
alarm.setSuccessor(light)
// console.log(light.setSuccessor(light));

lock.check(status)
// alarm.check(status)
// light.check(status)