Vue.createApp({
    data() {
        return {
            PokemonEs:[],
            loading:null,
            cantidad:0
        }
    },
    mounted(){
        this.getPokemon();
    },
     methods: {
        /*  tipo de peticiones
         Get ---- obtiene informacion
         Post --- crear recursos
         Put ---- modificar recursos
         Delete --- elimminar recursos */
        async getPokemon() {
            this.loading=true
            for(i=1;i<=this.cantidad;i++){
/*             const random = Math.floor(Math.random() * 630);
 */            const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+ i, {
                method: 'GET'
            });
            const data = await response.json();
            this.Pokemon=data;
            this.PokemonEs.push(this.Pokemon);
        }
        this.loading=false
        }
    }

}
).mount("#API")