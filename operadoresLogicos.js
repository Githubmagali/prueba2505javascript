// &&
//||
// !

const nombreAcceso ='Martin';
const edadAcceso = 18;
const tieneEntrada = false;

const permitirAcceso = edadAcceso >= 18 && tieneEntrada;
//console.log('Accceso permitido:' + permitirAcceso);


const nombreTurista = 'Belen';
const edadTurista = 21;
const tienePasaporte = true;

const permitirAccesoTurista = edadTurista>=18 && tienePasaporte;
//console.log('Acceso permitido:' +permitirAccesoTurista );

const nombreAcceso002 ='Gustavo';
const edadAcceso002 = 17;
const tieneEntrada002 = true;
const tienePermiso = true;

const permitirAcceso002 = (edadAcceso002 >= 18 && tieneEntrada002) || tienePermiso;
//console.log('Accceso permitido:' + permitirAcceso002);

// || ; Dice que si la operacion que esta entre parentesis no se cumple intente 
//de ejecutar la siguiente, osea tienePermiso

const variable = true;
//console.log(!variable);