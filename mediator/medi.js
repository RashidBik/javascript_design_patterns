class Member {
    constructor(name) {
        this.name = name
        this.chatroom = null
    }
    send(message, toMember){
        this.chatroom.send(message, this, toMember)
    }
    recive(message, fromMember){
        console.log(`${fromMember.name} to ${this.name}  ${message}`);
    }
}

class Chatroom {
    constructor() {
        this.members = []
    }

    addMember(member){
        this.members[member.name] = member
        member.chatroom = this
    }

    send(message, fromMember, toMember){
        toMember.recive(message, fromMember)
    }   
}

const chatroom = new Chatroom();

const rashid = new Member('rashid')
const nigin = new Member('nigin')
const najiba = new Member('najiba')

chatroom.addMember(rashid)
chatroom.addMember(nigin)
chatroom.addMember(najiba)

rashid.send('I Love You', nigin)
nigin.send('I love you too', rashid)