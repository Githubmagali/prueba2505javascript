//Se puede acceder solo dentor de un bloque
//pertenece a las variables declaradas con ocnst let dentro de un bloque



const variableDeBloque = 19;
if (variableDeBloque >= 18){
    const accesoPermitido = true;
// console.log(accesoPermitido);

 const miFuncion = () =>{
   // console.log(accesoPermitido);
 }
 miFuncion();
}
 const accesoPermitido = 'Si';
 //console.log(accesoPermitido);

 if(true){
    var nombre89 = 'Carlos';
 }
 //console.log(nombre89);

 if(true){
    let nombre1997 = 'Jeremias';
    //console.log (nombre1997)
 }