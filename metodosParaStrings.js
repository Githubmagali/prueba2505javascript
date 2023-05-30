
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

const variable002 = 'Estoy usando triple variable con triple metodo';
variable003= variable002.indexOf('u');
variable004=variable002.lastIndexOf('m');
console.log(variable002.slice(variable003));