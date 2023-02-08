Vue.createApp({
    data() {
        return {
          amiibos:[]
        }
    },
    methods:{
        async obtener(){ // async crea la funcion asincrona y necesita del await para funcionar
           const data = await fetch('https://amiiboapi.com/api/amiibo/',{
                method: 'GET'
           });
           const amibo = await data.json(); //Usar await para sacar de la promesa la peticion. 
           //No deja que la pagina se quede congelada
           this.amiibos = amibo.amiibo;

           console.log(this.amiibos)
        }
    }
    }
).mount("#app")