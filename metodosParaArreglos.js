//metodo tipo de dato donde puedo guardar varios valores
//toString() metodo qur transforma una variable a cadena de texto

const animales = ['perro', 'gato', 'pez'];

console.log(animales.length);


//toString(); permite tranformar un arreglo a una cadena de texto
//ejemplo  reproducirlo en el navegador

//document.body.innerHTML=animales.toString();

//join separa la cadena de texto

//console.log(animales.join('-'));

//sort() nos permite ordenar un arreglo de cadena de texto de forma alfabetica
//reverse() igual pero al reves

//console.log(animales.sort());

const arreglo1 =[1,2,3,4,5];
const arreglo2 =['A','B','C','D','E'];
const arreglo3 = arreglo1.concat(arreglo2);
console.log(arreglo3);

//.push() agregar un arreglo al final de un elemento
animales.push('jirafa', 'tiburon');
console.log(animales);

//pop() elimina el ultimo elemento
animales.pop();
console.log(animales);

//.shift() eleimina el primer elemento

const meses = ['enero','febrero','marzo','abril'];
//const mesEliminado = meses.shift();
//console.log(mesEliminado);
//console.log(meses[0]);

//console.log(animalEliminado);

meses.unshift('Los meses son');


//Splice() funcion que elimina el elemento que le señalemos y lo rempleza
//funciona con dos

const cosas= ['dedal','dado','cartera','mesa'];
cosas.splice(3,0,'estufa','chimenea');
console.log(cosas);

//slice() Copia una parte del arreglo a otro. Desde donde queremos copiar hasta antes del elemento

const animales000=['mono','conejo','vaca','gato'];
const animales000Varios =animales000.slice(1,3);
console.log(animales000Varios)
