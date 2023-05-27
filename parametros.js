//Los parametros pasan info a la funcion para que luego puedan hacer operaciones con esos valores
//Parametros: Valores especificados en la def
//Agumentos: valores que le pasamos a la funcion cuando la escribimos
const variable789 = (def_un_parametro) => {
  console.log(`Hola ${def_un_parametro}`);
};

//funcion789('estoy argumentando  el contenido de la variable789');
//funcion789('estoy argumentando por segunda vez el contenido de la variable789 ');

const variable346 = (
  parametro_definido = " la invocacion de la funcion vacia le pasamos este valor"
) => {
  console.log(`Hola ${parametro_definido}`);
};

//variable346('Estoy argumentando el contenido de la variable346');
//variable346('Estoy argumentando el segundo contenido de la variable346');
//variable346();
//variable346('Soy un argumento que le da valor a la variable346');

// Multiples parametros

//const operacion = (numero1, numero2, numero3) => {
  //console.log(numero1 - numero2 + numero3);
//};
//operacion(56, 234, 45)


const operacion23 = (tipo, numero1, numero2) =>{
    if(tipo== 'suma23'){
        console.log (numero1 + numero2);
    }else if (tipo=== 'resta23'){
        console.log(numero1 - numero2);
    }
};
operacion23('suma23',100,200);
operacion23('resta23',300,23)