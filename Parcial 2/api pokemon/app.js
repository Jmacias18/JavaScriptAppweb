Vue.createApp({
    data(){
        return{
         pokemon:null
        }
    },
    methods:{
      async  getPokemon(){ //funcion asincrona el async ocupa el await
            //GET   OBTENER INFORMACION
            //POST  PARA CREAR RECURSOS
            //PUT   MODIFICAR RECURSOS
            //DELETE  ELIMINAR RECURSOS
            const random=Math.floor(Math.random() * 200);
          const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+random, {
                method:"GET"
            });
            const data= await response.json();
            this.pokemon=data;
        }
    }
   

    }).mount("#app")