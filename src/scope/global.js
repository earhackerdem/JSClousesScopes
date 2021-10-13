var hello = 'Hello';
var hello = 'Hello +'
let world = 'Hello word';
// let world = 'hello word;
const helloWord = 'Hello World!';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWord);
}

anotherFunction()


/****        */

const helloWorld = () => {
    globalVar = 'im global';
}
helloWorld();
console.log(globalVar)


/****        */

const anotherFunction = () => {
    var localVar = globalVar = 'Im Global'
}

anotherFunction();
console.log(globalVar)