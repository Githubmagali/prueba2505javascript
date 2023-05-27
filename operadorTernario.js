const boleto= 'vip';
let codigoDeAcceso; //COMO LAS VARIABLES DEL TIPO CONST TIENEN QUE TENER UN VALOR DEFINIDO NO LAS PODEMOS USAR

if(boleto === 'vip'){
    codigoDeAcceso = 'VIP 09343';
}else{
    codigoDeAcceso = 'Regular 34320';
}
console.log(codigoDeAcceso);


const pasaporte98= 'Primera linea';
let codigoDeAc;

if(pasaporte98 === 'Primera linea'){
    codigoDeAc = 'Pasaporte primera linea 23432'
}else {
    codigoDeAc ='Pasaporte 4532'
}
console.log(codigoDeAc);

//operador ternario

const boleto8989 = 'VIP';

const codigoDeBoleto = (boleto8989 === 'VIP') ? 'VIP-890' : 'REGULAR-5433';

console.log(codigoDeBoleto);