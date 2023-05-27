//se puede usar let, const y var
//variables globales que se alcanzan fuera de una funcion
//se pueden acceder desde cualquier parte del codigo


var variableGlobal =' estoy en el archivo de scopeGlobal'; 
//console.log(variableGlobal);
//como la variablee no esta dentro de una funcion es una varable glabal, lo que me permite
//acceder desde cualquier parte del codigo

const scopeGlobal = () => {
    console.log('Hola'+ variableGlobal);
    variableGlobal= 'el valor que le doy a la variable Global';
    console.log('Escribo desde'+ variableGlobal);
};
//scopeGlobal(); //esta afuera de la funcion