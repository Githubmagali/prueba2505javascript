
//length PROPIEDAD  Devuelte un nro de caracteres de la cadena de texto

const texto56 ='Hola mundo';
console.log(texto56.length);

//indexOf() lastIndexOf()  METODO Devuelve el index del primer/ultimo caracter especificado

const texto67 = 'HolaH';
console.log(texto67.lastIndexOf('H'));

//.Slice() Devuelve un fragmento de una cadena de texto 1er parametro Index desde donde queremos cortar
                //2do parametro(opcional) index hasta dodne queremos cortar


 const texto90 = 'Hola soy una cadena de texto';
 console.log(texto90.slice(0,4));



 const variableDeclarada = 'Hola estoy usando doble metodo en dos variables que se deblaran';
 const variable89 =variableDeclarada.indexOf('e');
 console.log(variableDeclarada.slice(variable89));

const variable002 = 'hola estoy en el segundo intento de usar doble metodo';
const variable003= variable002.indexOf('u');
const variable004=variable002.lastIndexOf('m');
console.log(variable002.slice(variable003, variable004 +6));



const variable078 = 'Hola, voy a usar slice contando las posiciones de derecha a izquierda';
console.log(variable078.slice(-58,-2));
//replace Devuelve una cadena de texto en donde remplaza un valor por otro
           //primer parametro El texto que queremos reemplazar
           //2do El texto que queremos poner

const texto89 ='Hola soy Ana';
console.log(texto89.replace('Ana', 'Arturo'));

//split() Convierte una cadena de texto en un arreglo. Tenemos que especificar donde cortar cada elemento
          //primer parametro el caracter que funciona como separador

          const variable1995 ='Hola voy a pasar de ser una cadena de texto a un arreglo';
          console.log(variable1995.split(''));

          //toUpperCase() Devuelve una cadena de texto de puras MAYUSCULAS

          console.log(variable1995.toUpperCase());
          //toLowerCase() Devuelve la cadena de texto en minusculas
          console.log(variable1995.toLocaleLowerCase());
