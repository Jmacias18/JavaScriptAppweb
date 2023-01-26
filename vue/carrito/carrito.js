Vue.createApp({
    data(){
        return{
          /*   carrito:[
              
            ],
            producto:"" */
            nombre:"",
            precio:"",
            cantidad:"",
            color:"",
            caracteristicas:"",
            pasillo:"",
            productos:[]
        }
    },
    methods:{
       /*  agregarProducto(){
            this.carrito.push(this.producto);
            this.producto="";
        } */
        agregar(){
            const producto={
                nombre:this.nombre,
                precio:this.precio,
                cantidad:this.cantidad,
                color:this.color,
                caracteristicas:this.caracteristicas,
                pasillo:this.pasillo,

            }
            this.productos.push(producto);
        }
    }

    },
).mount("#CR")