//Spread permite tomar los elemento de un arreglo u objeto y expandirlos en otro sitio

const profesiones=['contador','administracion','medico','psiquiatra'];
const area =['salon','guardia','oficinas',...profesiones];
console.log(area);

const datosLogin ={ Apellido: 'Lopez',
empleo: 'medica',
altura:1.80,
};
const usuario90 ={
    ...datosLogin,
    nombre:'Ester',
    edad:60,
    altura:1.60,
   
};
console.log(usuario90);

//Parametro rest permite que una funcion contenga un nro indefinido de argumentos
//Los argumentos extra que encuentre los convertira en un arreglo

const usuario456 =(nombre, correo,...datosAdicionales) =>{
    console.log(nombre, correo, datosAdicionales);
};
 usuario456('Ana', 'ana@mail.com','Ana',23);

 //Destructucacion de objetos nos permite obtener elementos o 
 //propiedades de una rreglo u objeto y guardarlos en una variable

 const variableAnimales =['pez','loro','gato'];
 const[primerAni, segundoAni, tercerAni]= variableAnimales;
 console.log(segundoAni);

 const persona1956 ={nombre:'Cecilia', edad:78};
 const{nombre, edad}= persona1956;
 console.log(nombre,edad);

 const L567=(nombre,edad) =>{
 console.log(`${nombre}tiene ${edad}`);
 };
 L567(persona1956.nombre, persona1956.edad);


 M1997={nombre:'Esteban', edad:45, nacionalidad:'Boliviana'};

 constL90=({nombre,edad,nacionalidad})=>{
    console.log(`El señor ${nombre}, tiene ${edad} y su nacionalidad ${nacionalidad}`);


 };
 constL90(M1997);

