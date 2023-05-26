
const persona001= {
    edad:15,
    nacionalidad: 'Uruguay'
};
if (persona001.edad >=18){
    console.log('El usuario es mayor de edad');
}else {
    console.log('El usuario es menor de edad');
}

//Combinando operadores

const persona456 = {
    edad :67,
 pais:'Mexico',
 pasaporte: 'true'
};
if(persona456.edad >= 18 && persona456.pasaporte){
 console.log('La persona es mayor de edad y tiene pasaporte');
}else {
    console.log('La persona no cumple con los requisitos requeridos');
}

const persona567 = {
    edad:17,
    pais: 'Bolivia',
    permiso:'false'
};
if(persona567.edad >=18 || persona567.permiso){
    console.log('La persona cuenta con al menos un requisito');
}else{
    console.log('Le persona no cuenta con ninguno de los dos requisitos');
}