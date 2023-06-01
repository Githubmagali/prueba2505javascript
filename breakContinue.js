/*
const nombresA = ["Axel", "Alex", "Asia", "Raul", "Paula"];

for (let variableI = 0; variableI < nombresA.length; variableI++) {
  console.log(nombresA[variableI][0]);
}

for (let variable1234 = 0; variable1234 < nombresA.length; variable1234++) {
  console.log(nombresA[variable1234][2]);
}

for (let variableH = 0; variableH < nombresA.length; variableH++) {
  if (nombresA[variableH][0] !== "A") {
    break;
  }
  console.log(nombresA[variableH]);
}
*/
//Continue Nos sirve para saltar la siguiente iteracion

const invitadosA = ['Ramiro','Karen','Ruben', 'mario','Estefania'];
console.log('Lista de invitados');

for (let variableI = 0 ; variableI <invitadosA.length ; variableI++){
    if (invitadosA[variableI] === 'Ruben'){
        continue;
    }
    console.log(invitadosA[variableI]);
}