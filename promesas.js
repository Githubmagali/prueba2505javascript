const promesa34 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const exito= true;
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