//funciones que se pueden pasar como parametro a otra funcion

//obtenerPostsDeUsuario('Mercedes', (posts)=> console.log(posts));
// En caso que que te dan un paquete se puede ejecutar esta funcion

//obtenerPostsDeUsuario libreria. / => ; callback
//Te devuelven la onformacion dentro de otra funcion
//Pasas varios parametros donde uno de ellos tiene que ser una funcion donde te devuelve onfo

const obtenerPostsDeUsuario =(usuario, callback) =>{ //variable que recibe dos parametros
    console.log(`Obteniendo los post de ${usuario}...`); //imprime

    setTimeout( ()=>{ // te permite indicarle que quetes ejecutar despues de determ tiempo que le indiquemos
        let posts =['post1', 'post2', 'post3']; //creamos un arreglo
        callback(posts); // invocamos a callback y le insertamos el parametro
    }, 2000); // le indicamos a setTimeOut el tiempo que queremos que ejecute la variable
};
obtenerPostsDeUsuario('Ana', (posts)=>{ //le pasamos la variable posts a call back
    console.log(posts); //Le devolvemos los valores para que cuando tenenomos la funcion los podemos mostrar
});


const obtenerUsuarios =(nombre, nikname, callback)=>{
    console.log(`Obtenemos los usuarios ${nombre}, ${nikname}`);

    setTimeout(() => {
        let usuario =['usuario1', 'usuario2', 'usuario3'];
        callback(usuario);
    }, 2000);
};
obtenerUsuarios('Cecilia', 'Cecilia1234', (usuario)=>{
    console.log(usuario);
});

