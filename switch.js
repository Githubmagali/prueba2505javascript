// ejecuta cuando un valor es igual a otro

const usuario3232 = {
  nombre: "Luis",
  edad: 67,
  pais: "Paraguay",
};

/*if(usuario3232.pais === 'Colombia'){
    console.log('El usuario es de Colombia');
}else if (usuario3232.pais === 'Rusia' ) {
    console.log('El usuario es de Rusia');
}else if(usuario3232.pais === 'Peru'){
    console.log('El usuario es de Peru');
}else{
    console.log('El usuario es de otro pais')
}*/

switch (usuario3232.pais) {
  case "Canada":
    console.log("El usuario es de Canada");
    break;
  case "España":
    console.log("El usuario es de España");
    breack;
  default:
    console.log("El usuario es de otro pais");
}
