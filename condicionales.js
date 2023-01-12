
        //var
       /* var nombre="Jose Macias";
            var edad=22;
            var escuela="UT";
            var gustos="Futbol";
            var peso=65.7;
            var altura=1.70;
            var lugar="San Luis Rio Colorado";
            const fechaNac=new Date("2000-09-15");
            

        //let

        //const
        //concatenar con el signo +
       // console.log("hola desde Java Script " + nombre+ "y tengo edad de" + edad);

            console.log(`hola desde Java script es ${nombre} y tengo una edad de ${edad} años,naci en ${lugar} la fecha ${fechaNac} y estudio en la ${escuela},tengo una altura de ${altura} peso ${peso} lo que mas me gusta hacer es jugar ${gustos}`);
            */
    /*nombre=prompt("Escriba Una letra");*/
   /* console.log("Mi nombre es "+nombre)*/
  /*  if(nombre =="a" || nombre=="e" || nombre=="i" || nombre=="o" || nombre=="u"){
        console.log("Es una vocal")


    }else{
        console.log("Es una consonante ")
    }*/
    /*var edad=prompt("Escriba su edad")
    if(edad ==0 || edad >100){
        console.log("edad Erronea")
    }
    if(edad <18){
    console.log("Eres menor de edad")
    }else{
        console.log("Eres mayor de edad")
    }*/
    
    const edad=prompt("Escriba su edad");

    const edades =(edad)=> {
        if(edad ==0 || edad >100){
            console.log("edad Erronea")
        }
        if(edad <18){
        console.log("Eres menor de edad")
        }else{
            console.log("Eres mayor de edad")
        }

    }
    edades(edad);
