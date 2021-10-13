const HelloWord = () => {
    const hello = 'Hello World';
    console.log(hello);
}

HelloWord();
console.log(hello);

var scope = "i am global";
const functionScope = () => {
    var scope = "i am just a local";
    const func = () => {
        return scope;
    }
    console.log(func());
}

functionScope();
console.log(scope);


// let hola = 'hola';
// let hola = 'eoo';
// hola = 'eoo';

// console.log(hola)