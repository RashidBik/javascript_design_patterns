class Proxy{
    constructor(){
        this.getValue = function(coin) {
            console.log('calling the external API');

            switch (coin) {
                case 'bitcoin':
                    return '100$'         
                case 'litecoin':
                    return '400$'
                case 'tron':
                    return '23$'
            }
        }
    }
}

class ProxyHandler {
    constructor() {
        this.cache = []
    }
    getValue(coin){
        if(this.cache[coin]){
            return this.cache[coin]
        }
        this.cache[coin] = new Proxy().getValue(coin);
        return this.cache[coin]
    }
}

const prx = new ProxyHandler();

console.log(prx.getValue('bitcoin'));
console.log(prx.getValue('bitcoin'));
console.log(prx.getValue('litecoin'));
console.log(prx.getValue('litecoin'));
console.log(prx.getValue('tron'));
console.log(prx.getValue('tron'));
