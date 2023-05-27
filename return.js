//Sentencia return nos sirve para armar o devoolver info hacia afuera de la funcion

const operacion234 =(elPrimerValor, numero1, numero2) =>{
    if(elPrimerValor === 'suma234'){
        console.log (numero1+numero2);
    }else if (tipo==='resta234'){
        console.log(numero1-numero2);
    }
    return 'Hola';
};
operacion234('suma234', 300,45);

const variable345 =(parametro1, parametro2, parametro3) =>{
    if (parametro1 === 'suma345'){
        console.log(parametro2+parametro3);
    }else if (parametro1=== 'resta345'){
        console.log(parametro2-parametro3)
    }
 
    
}
variable345 ('suma345', 300,34);
variable345 ('resta345', 300,34);

/*
const operacion056 =(parametro0561, parametro0562, parametro0563) =>{
    if (parametro0561 === 'suma'){
    console.log(parametro0562 + parametro0563);
} else if(parametro0561 === 'resta'){
 console.log(parametro0562 - parametro0563)
} 
  return 'Hola'; //defino a la funcion

    }
    const Variable056 = operacion056('suma', 3443, 454);// Al valor lo estoy retornando hacia la invocacions
    //Almaceno a la invocacion en una variable
   
    console.log(Variable056);
*/

    const operacion056 =(parametro0561, parametro0562, parametro0563) =>{
        let variableResultado; //variable
        if (parametro0561 === 'suma'){

        variableResultado = parametro0562 + parametro0563 //guarda el resultado en la variable
    } else if(parametro0561 === 'resta'){

     variableResultado= parametro0562 - parametro0563
    } 
      return variableResultado; 
    
        }
        const Variable056 = operacion056('suma', 3, 4);// Al valor lo estoy retornando hacia la invocacions
        //Almaceno a la invocacion en una variable
        console.log(Variable056);


        const operacion00 = (parametro1, parametro2, parametro3) =>{
          if (parametro1 === 'primerValor')
          { return parametro2+parametro3;}
          else if (parametro1 === 'segundoValor')
          {return parametro2 - parametro3;}
        };

        const variable00 = operacion00 ('primerValor', 4,5);
        const variable02 = operacion00 ('segundoValor', 56,5);
        console.log(variable00, variable02);