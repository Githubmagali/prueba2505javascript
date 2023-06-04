const fetchPost = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = ["post1", "post2", "post3"];
      const error = true;
      if (error) {
        reject("Hubo un error");
      } else {
        resolve(posts);
      }
    }, 2000);
  });
};
//console.log('Inicia la operacion'); //Le decimos al navegador que espere nuestra respuesta
//fetchPost().then((posts)=>console.log(posts))//espera la respuesta de fondo
//.catch((error)=>console.log(error));
//console.log('Finaliza la operacion');//y mientras tanto ejecuta codigo Como este console.log

const mostrarPosts = async () => { //async indica el retorno de la promesa se va a ejecutar pero no va a mostrar codigo hasta que se ejecute la promesa 
  try { //contiene el codigo para ejecutarlo
    const posts = await fetchPost(); //Await espera el retorno d ela promesa y ejecuta el codigo
    console.log(posts);
  } catch (error) { //catch atrapa un error si existe en try
    console.log(error);
  }
};
mostrarPosts();
