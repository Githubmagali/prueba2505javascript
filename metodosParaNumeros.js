//to string

const numero1878 = 'Letras';
console.log(numero1878, typeof numero1878);

const variable00 = numero1878.toString();
console.log(variable00, typeof variable00);


//tofixed Permite obtener un numero con la cantidad de decimales decifrados

const numero1997 = 3789;
console.log(numero1997.toFixed(10));

//parceInt() Intenta de transformar un valor a un entero
/*
const numero1660 = parseInt(prompt('Guarda dentro de la variable numero1660'));
const numero1661 = parseInt(prompt('Guarda dentro de la variable numero1660'));
console.log(numero1660 + numero1661);

//parceFloat() Intenta de tranformar un valor a un nro con decimales

const numero160 = parseFloat(prompt('Guarda dentro de la variable numero1660'));
const numero161 = parseFloat(prompt('Guarda dentro de la variable numero1660'));
console.log(numero160 + numero161);
*/

//Math.random() Genera un nro al azar entre 0 y 1 
//Math es un objeto los objetos empiezan con MAYUSCULA

const numero1567 =Math.random();
console.log(numero1567);

//Math.floor() Redondea hacia abajo un numero;

console.log(Math.floor(102.6));

//Math.ceil() redondea hacia arreba un numero;

console.log(Math.ceil(103.6));

//Math.round() Redondea hacia el entero mas cercano;

console.log(Math.round(106.5));


const numero19 = Math.random();
console.log(Math.floor(numero19 * 101));