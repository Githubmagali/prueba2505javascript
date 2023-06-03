
//Metodo inicializando datos: Para ello tenes que hace un nvo objeto

class Usuario{
    constructor(nombre, correo){
        this.nombre=nombre;
        this.correo=correo;
    }

    borrarUsuario(id_usuario){
        console.log(`El usuario ${id_usuario} fue eliminado`);
    }
}
const Us = new Usuario ('Martin', 'martin@mail.com');
Us.borrarUsuario(1);

//Metodo estatico accede a propiedades y metodos sin tener que inicializarlos

class Usuario1997{
    constructor(nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
    static borrar(id_usuario){
        console.log(`El usuario ${id_usuario} fue borrado`) 
    }
    static actualizaciones=20;
    }
Usuario1997.borrar(3);
console.log(Usuario1997.actualizaciones);