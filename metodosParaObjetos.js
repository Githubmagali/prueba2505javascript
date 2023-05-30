//Metodos propios; son personalizados

const variableO = {
  nombre: "maria",
  edad: 29,
  altura: 1.8,
  saludo: () => {
    console.log("Hola!");
  },
};
variableO.saludo();

//object.keys() Nos devuelve un arreglo con las llaves (keys)del objeto

const variableResult = Object.keys(variableO);
console.log(variableResult);


//Object.values() nos devuelve un arreglo con los valores (values) del objeto

const resultadoVariable = Object.values(variableO);
 console.log(resultadoVariable);

 //Object.entries() Nos devuelve un arreglo con las parejas de clave y valor del objeto

 const resultadosVall = Object.entries (variableO);
 console.log(resultadosVall);

 console.log(`El objeto tiene ${resultadosVall.length}`);