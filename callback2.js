
const usuariosU =(nombre, nik, mail, callback)=>{
    console.log(`Obtengo los usuarios ${nombre} ${nik}, mail ${mail}`);
    setTimeout(()=>{
        let usuario=['usuario1', 'usuario2', 'usuario3'];
        callback(usuario);
    }, 2000);
};
usuariosU('Mateo','Mateo456', 'mateo@mail.com', (usuario)=>{
    console.log(usuario);
});


