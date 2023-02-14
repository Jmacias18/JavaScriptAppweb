Vue.createApp({
    data(){
        return{
            imagen:""
        }
    },
    computed:{
        mostrar(){
            if(this.imagen == "cr7"){
                return "https://www.fichajes.com/build/images/player-covers/cristiano-ronaldo.352c95f5.jpg"
            }
            if(this.imagen == "gullit"){
                return "http://www.contrareplica.mx/uploads/2020/07/14/normal/a57a96d6344483700d86bca36af0a0d0.jpg"
            }
            if(this.imagen == "wiki"){
                return "https://www.futboltotal.com.mx/wp-content/uploads/2022/02/whatsapp-image-2022-02-18-at-5.10.12-pm.jpeg"
            }
            if(this.imagen == "melvin"){
                return "https://www.debate.com.mx/__export/1598735364208/sites/debate/img/2020/08/29/jam_m_90190_crop1598735192475.jpg_423682103.jpg"
            }
            if(this.imagen == "pulido"){
                return "https://www.elimparcial.com/__export/1600895766861/sites/elimparcial/img/2020/09/23/pulido_crop1600895714922.jpg_759710130.jpg"
            }
        }
        }
    }).mount("#app")