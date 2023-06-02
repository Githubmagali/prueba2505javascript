

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
        constructor(usuario, password, permisos){
            super(usuario, password);
            this.permisos=permisos;
        }
        borrarPost(id){
            if(this.permisos.includes('borrar')){
                console.log(`El usuario ${id} fue borrado`);
            }
        }
    
}
const us = new Usuario ('Carlos', '345');
console.log(us.obtenerPosts());

const usuario2 = new Moderador('Mario', '789',['borrar','editar']);
console.log(usuario2.obtenerPosts());
console.log(usuario2.permisos);
usuario2.borrarPost(6);

