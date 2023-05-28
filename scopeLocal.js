var functionNumero = (nombre) => {
  var numero = nombre.length; //variable local, porque esta dentro de una funcion,
  // entonces no puedo acceder a ella por fuera de la funcion

  console.log(`${nombre} tiene ${numero} letras`);
};
//functionNumero("Florencia");

//la ventaja d elas variables locales e sque se puede repetir el nombre de la funcion


var cantidadDeLetras = (nombre) =>{
    var numero = nombre.length;

    console.log(`${nombre} tiene ${numero} letras`);
  var funcionAnidada = () => {
   console.log(numero);
  };
  funcionAnidada();
};

cantidadDeLetras('Segismundo Octavio');
console.log(numero);