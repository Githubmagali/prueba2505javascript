

//booleano
const mayorQue = 1 > 2;

console.log(mayorQue);

//arrays
const arreglo =[1, 20, 205, {propiedad: 'valor'}];
console.log(arreglo);

//objeto   nombre; propiedad luisa; valor
const persona = {
    nombre : 'Luisa',
    edad: 45,
    profesion: {
       cargo: 'gerente',
       area: 'ambiental',
       tareaAsignada: 'relevamiento',
    },
};
console.log(persona.nombre);

//function para reutilizar codigo y no escribir 20 veces lo mismo
function hola(){
    console.log('Hola');
}
hola();

//Null se usa en el momento que querramos que un valor sea nulo
//undefined que no esta definido
const miVariable = null;
