//METODO de los arreglos que podemos usar para recorrer los elementos
/*
const plantas60=['pino','rosa','cactus','glicina'];

plantas60.forEach((plantas60, index) =>{
    console.log(`La planta ${index} ${plantas60}`);
});

const plantas601=['pino','laurel','arbol','jazmin'];

plantas601.forEach((plantas601, index)=>console.log(`La planta ${index} ${plantas601}`));

//ciclo for in Nos permite recorrer las propiedades de un objeto

const persona1600 = {
    nombre:'Luis',
    edad:78,
    altura:1.80};
    for (propiedad in persona1600){
        console.log(persona1600[propiedad]);
    }
    

    const persona1900 = {
        nombre:'Luis',
        edad:78,
        altura:1.80};
        for (propiedad in persona1900){
            [propiedad] = '';
        }
        console.log(persona1900);
        */

        const etiquetas = document.head.children;
       //console.log(etiquetas);
        //for(variableElemento of etiquetas){
           //console.log(variableElemento);}
          

           [...etiquetas].forEach((elemento)=>console.log(elemento));

