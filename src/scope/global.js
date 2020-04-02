var hello = 'Hello';
var hello = 'Hello + world'; // Si se puede volver a asignar con const
let world = 'Hello world'
let world = 'Hi' // No se puede volver a asignar con let
const helloWorld = 'Hello World!'

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
};

anotherFunction();

const helloWorld1 = () => {
    globalVar = 'Im global'
}

helloWorld1()
