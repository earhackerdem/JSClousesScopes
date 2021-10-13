const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
        console.log(fruits2)
        console.log(fruits3)
    }

    console.log(fruits1)

}

fruits();
/** Scope con let, let corresponde a un scope de bloque razon por la cual el bloque respeta el valor 2 y despues imprime 1 */
let x = 1;
{
    let x = 2;
    console.log(x);
}

console.log(x)
/** Scope con var, var corresponde a un scope de global razon por la cual reasigna el valor de x a  2 */
var x = 1;
{
    var x = 2;
    console.log(x);
}

console.log(x)

const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}

anotherFunction();
