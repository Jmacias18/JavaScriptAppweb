<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue</title>
</head>
<body>
    <div id="app">
       <h1>contador:{{contador}}</h1> 
        <button v-on:click="incrementar()"> incrementar</button>
        <button v-on:click="error()"> restar</button>
        <button v-on:click="limpiar()"> limpiar</button>
    </div>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script>
        Vue.createApp({
            data(){
                return{
                    contador: 0,
                
                }
            },
            methods: {
                incrementar(){
                   this.contador++;
                },
                error(){
                    this.contador--;
                    if(this.contador<0){
                        this.contador=0
                         alert("No se admiten numeros menores")
                    }
                },
                limpiar(){
                    this.contador=0;
                }
            }

        }).mount("#app");


    </script>
</body>
</html>