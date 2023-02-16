//variables
// Con var asignamos una variable

var a; // declarando a
var b = 'b'; // asignando y declarando variable
b = 'bb'; // reasignamos el valor que se tiene
var a = 'aa'; // redeclaracion de a

//global scope
// se dice que cualquier variable que se encuentre en el documento pasa a ser variables globales
// y se instancian dentro de windows
var fruit = 'Apple'; // global

// haremos una funcion que pueda leer el elemento
function bestFruit() {
    console.log(fruit);
}

bestFruit();


//Asi se crea una variable global por accidente:
function countries() {
    country = "Colombia"; // asignamos un valor pero nunca declaramos una variable
    console.log(country);
}

countries()
console.log(country)