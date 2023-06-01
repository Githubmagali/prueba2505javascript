//Estrucutra d euna clase
//Propiedades La clase puede contener variables Dentro sw una clase se llaman propiedades

//Constructor Metodo especial para inicializar un objeto creado a partir de una clase

//Metodo La clase puede contener funciones dentro de una clase se llaman METODOS

class Usuario {
  tipo = "usuario";
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  obtenerNombreCompleto(){
    return `${this.nombre} ${this.apellido}`;
  }
}

const usuario = new Usuario("Sofia", "Nievas");
console.log(usuario.obtenerNombreCompleto());


