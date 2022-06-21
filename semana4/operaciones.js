let numero1 = 10;
let numero2 = 20;

console.log('suma ', numero1 + numero2);
console.log('resta ', numero1 - numero2);
console.log('multiplicacion ', numero1 * numero2);
console.log('division ', numero1 / numero2);

let numero3 = '22';
console.log(Number(numero3));

let numero5 = '33.5';
console.log(Number(numero5));
console.log(+numero5);
console.log(parseFloat(numero5));
console.log(parseInt(numero5));

const operacion = 3 * 2 + 10 - 5 / 2;
// Math.sqrt = raiz cuadrada
console.log(Math.sqrt(operacion));
// Math.pow = potencia
console.log(Math.pow(6, 3));
console.log(Math.pow(4, 3));

// !Nota todo valore recibo en el prompt es un string
const catetoA = Number(prompt("Ingrese el valor de A"));
const catetoB = Number(prompt("Ingrese el valor de B"));

const operacion2 = Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB, 2));
console.log("La hipostenusa es", operacion2);
