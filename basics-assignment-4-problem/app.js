const app=Vue.createApp({
    data(){
        return {
            user:"",
            isVisible:true,
            backgroundColor:"",
        }
    },
    methods:{
        toggle(){
            console.log("toggle")
            this.isVisible=!this.isVisible
        }
    }
})
app.mount("#assignment")