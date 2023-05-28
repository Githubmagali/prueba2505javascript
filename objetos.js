
const personaConPropiedades = {
    nombre: 'Teresa',
    edad: 59,
    correo: 'teresa@mail.com',
    idiomas:{
        aleman:true,
        ingles: true,
        portugues:true,
        italiano:true,
    },
 especialidades:['idiomas', 'administracion'],
 desempeño: function (){ //las funciones dentro de un objeto se las conoce como METODOS
    alert('Sabe mas de dos idiomas');
 },
 
}; 
//personaConPropiedades.desempeño(); //CON LOS () LE INDICAMOS QUE QUEREMOS EJECUTARLO

console.log(personaConPropiedades.idiomas);
console.log(personaConPropiedades['edad']);


const variable009 ='nombre';
console.log(personaConPropiedades[variable009]);

personaConPropiedades.pais ='Chile';
console.log(personaConPropiedades);
