
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
    autorizada:'false'
};
if(persona567.edad >=18 || persona567.autorizada === 'false'){
    console.log('La persona cuenta con al menos un requisito');
}else{
    console.log('Le persona no cuenta con ninguno de los dos requisitos');
}



const persona002 = {
   
    edad: 12,
    pasaporte: 'false',
    pais:'Peru'
};
if (persona002.edad >= 18){
    if(persona002.pasaporte){
        console.log('El usuario es mayor de edad y tiene pasaporte')
    }else{
        console.log('El usuario es mayor de edad, pero no tiene pasaporte')
    }
} else {
    console.log('El usuario es menor de edad');
}

if(persona002.pais === 'Mexico'){
 console.log('El usuario es Mexicano');
} else if(persona002.pais === 'Peru'){
 console.log('El usuario es de Peru');
} else {
    console.log('El usuario es de otro pais');
}
