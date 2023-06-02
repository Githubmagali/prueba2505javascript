//Estrucutra d euna clase
//Propiedades La clase puede contener variables Dentro sw una clase se llaman propiedades

//Constructor Metodo especial para inicializar un objeto creado a partir de una clase

//Metodo La clase puede contener funciones dentro de una clase se llaman METODOS

class Usuario {        //Plantilla Encapsula una CLASE 
  tipo = "usuario";
  constructor(nombre, apellido, edad, nacionalidad) { //El constructor recibe propiedades NO LAS CREA Y SE EJECUTRA AUTOMATICAMENTE CUANDO USAMOS LA CLASE PARA CREAR UN OBJETO
    this.nombre = nombre;      //Crea propiedades = recibe el valor del constructor
    this.apellido = apellido;
    this.edad =edad;
    this.nacionalidad = nacionalidad;

  }

  obtenerNombreCompleto(){
    return `${this.nombre} ${this.apellido} ${this.edad} ${this.nacionalidad}`;
  }
}               //Encapsulando codigo
// Toda la aprte de arriba es una plantilla, usando new es un objeto

const usuario = new Usuario("Sofia", "Nievas", 34, 'Boliviana');
console.log(usuario.obtenerNombreCompleto());

const usuario02 = new Usuario('Melina', 'Klenz', 48, 'Peruana');
console.log(usuario02.obtenerNombreCompleto());

