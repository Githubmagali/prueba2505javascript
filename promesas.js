/*
const promesa34 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const exito= true; //false para que se ejecute catch
        if(exito){
            resolve('La operacion fue exitosa')
        }else{
            reject('La operacion no tuvo exito')
        }
    }, 4000);
});
promesa34.then((mensaje)=>{ //then va a ejecutar la funcion cuando termino la promesa si fue exitosa se ejecuta
    alert(mensaje);
});

promesa34.catch((mensaje)=>{ //Si la promesa es false catch se ejecuta
    alert(mensaje);
});
*/

const variablePromesa = new Promise((reso, reje)=>{
     setTimeout(() => {
        const exito=true;
        if(exito){
            reso('La opretacion fue exitosa')
        }else{
            reje('La operacion no tuvo exito')
        }
     }, 3000);
     });
     variablePromesa.then((mensaje)=>alert(mensaje));
     variablePromesa.catch((mensaje)=>alert(mensaje));