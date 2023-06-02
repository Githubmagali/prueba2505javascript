

//Moderador evitan usar post. tiene lo mismo que las clases pero con permisos adicionales


class Usuario{
    constructor(usuario, password){
        this.usuario =usuario;
        this.password = password;
    }
    obtenerPosts(){
        const posts = ['post1', 'post2'];
        return posts;
    }
}
    class Moderador extends Usuario{
    
}
const usuario = new Usuario ('Carlos', '345');
console.log(usuario.obtenerPosts());

const usuario2 = new Moderador('Mario', '789');
console.log(usuario2.obtenerPosts());
