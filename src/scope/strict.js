'use strict';
pi = 3.1416;
console.log(pi);
// Hemos asignado el valor sin pasar
// por la declaracion

function myFunction() {
    'use strict';  //activar esta funcion
    let pi;
    return pi = 3.1416;
}

console.log(myFunction());