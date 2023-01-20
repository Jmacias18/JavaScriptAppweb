Vue.createApp({
    data(){
        return{
            /* nombre:"jose",
            carrera:"", */
            edad:"",
            resultado:""
        } 
    }, methods:{
        calcularedad(){
            if(this.edad>=18){
                this.resultado="Eres mayor de edad"
            }else{
                this.resultado="Eres menor de edad"
            }

        }
    }
    }).mount("#app")