const fetchPost = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = ["post1", "post2", "post3"];
      const error = false;
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

const mostrarPosts = async () => {
  try {
    const posts = await fetchPost();
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
};
mostrarPosts();
