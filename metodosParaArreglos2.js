//IndexOf Obtenemos el primer index de un elemento
// Si no hay elemento nos retorna 1

const nombres890 =['luis','luisil','jeremias','octavio',89];
console.log(nombres890.indexOf('Jeremias'))

//forEach()

nombres890.forEach( ()=>{
    console.log('Hola mundo');
});

nombres890.forEach((nombre88, index)=>{
    console.log(`Hola ${nombre88} ${index}`);
});


//nombres80 es el nombre que define a los elementos
 //find() Nos permite recorrer un arreglo que devuelve el primer elemento

const resultado890 = nombres890.find((nombre7) => {
    if (nombre7[0] === 'L'){
        return nombre7;
    }
});
console.log(resultado890);

const Variableresultado888 = nombres890.find((nombre888) =>{
    console.log(nombre888[0]);
});


//.map() nos permite ejecutar una funcion por cada elemento y
//crear un arreglo en base  a los resultados de esa funcion

const variableMap00 = nombres890.map((nombre78)=> nombre78);
console.log(variableMap00);

const variableMap = nombres890.map((nombre878)=>{
    return nombre878;
});
console.log(variableMap);


//.filter() el METODO nos permite ejecutar una funcion por cada elemento
//y luego crear un arreglo en base a los resultados de esa funcion


const nombreFilter = nombres890.filter((nombreF)=>{
    if(nombreF.length === 6){
        return nombreF;
    }
});
console.log(nombreFilter);

//nombreF es el identificador de cada elemento

//.includes() Nos permite saber si el arreglo contiene elemento especificado

console.log(nombres890.includes('luis'));

//every() Nos permite ejecutar una condicional sobre cada elemento y nos devuelve TRUE si todos los elementos
//cumpieron con la condicion

const variableEvery = nombres890.every((identificadorDecadaElemento)=>{
    if (typeof identificadorDecadaElemento === 'sring'){
        return true;
    } else{
      return false;
    }
});
console.log('Todos los elementos son  '+ variableEvery);

//some() nos permite ejecutar una condicional sobre cada elemento y nos devuelve TRUE
// si algun elemento cumplio con la condicion

const variableS = nombres890.some((idElemento)=>{
    if (typeof nombres !== 'string'){
        return true;
    }else{
        return false;
    }
});
console.log('El arreglo es '+ variableS);