class Persona{
    contructor(nombre, edad, altura, profesion){
        this.nombre=nombre;
        this.edad=edad;
        this.altura=altura;
        this.profesion=profesion;
    }
    obtenerPosts(){
        const posts=['post1', 'post2'];
        return posts;
    }
}
class Moderador extends Persona{
    constructor(nombre, edad, altura, profesion, permisos){
        super(nombre, edad, altura, profesion);
        this.permisos=permisos;
    }
  borrarPost(id){
    if(this.permisos.includes('borrar')){
        console.log(`El usuario ${id} ha sido borrado`);
    } else{
        console.log('No tiene  los permisos para borrar post');
    }
    
  }
}

const Per= new Persona('Maria', 78, 1.80, 'medica');
console.log(Per.obtenerPosts());

const Per2= new Moderador('Mario', 56, 1.60, 'dentista',[ 'editar']);
console.log(Per2.obtenerPosts());
console.log(Per2.permisos);
Per2.borrarPost(5);