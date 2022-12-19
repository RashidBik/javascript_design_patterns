function *genrator(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const gen = genrator()

console.log(gen.next().done);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());